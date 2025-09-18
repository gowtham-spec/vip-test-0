import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit, Star, Users, Clock, BookOpen, ArrowUp, ArrowDown, Database } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface TopCourse {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  review_count: number;
  student_count: number;
  price: number;
  original_price: number;
  duration: string;
  lecture_count: number;
  level: string;
  image_url: string;
  tags: string[];
  last_updated: string;
  is_bestseller: boolean;
  is_hot: boolean;
  is_new: boolean;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  instructor_name: string;
  duration: string;
  status: string;
}

const TopCoursesManagement = () => {
  const [topCourses, setTopCourses] = useState<TopCourse[]>([]);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAddFromDatabaseOpen, setIsAddFromDatabaseOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<TopCourse | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    rating: 4.8,
    review_count: 1000,
    student_count: 5000,
    price: 89.99,
    original_price: 199.99,
    duration: '40 hours',
    lecture_count: 100,
    level: 'Intermediate',
    image_url: '',
    tags: '',
    last_updated: 'January 2024',
    is_bestseller: false,
    is_hot: false,
    is_new: false,
    is_active: true
  });

  useEffect(() => {
    fetchTopCourses();
    fetchAvailableCourses();
  }, []);

  const fetchTopCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('top_courses')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTopCourses(data || []);
    } catch (error) {
      console.error('Error fetching top courses:', error);
      toast({
        title: "Error",
        description: "Failed to fetch top courses",
        variant: "destructive"
      });
    }
  };

  const fetchAvailableCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, description, image_url, instructor_name, duration, status')
        .eq('status', 'published')
        .order('title', { ascending: true });

      if (error) throw error;
      setAvailableCourses(data || []);
    } catch (error) {
      console.error('Error fetching available courses:', error);
      toast({
        title: "Error",
        description: "Failed to fetch available courses",
        variant: "destructive"
      });
    }
  };

  const addCourseFromDatabase = async () => {
    if (!selectedCourseId) {
      toast({
        title: "Error",
        description: "Please select a course",
        variant: "destructive"
      });
      return;
    }

    const selectedCourse = availableCourses.find(c => c.id === selectedCourseId);
    if (!selectedCourse) return;

    setLoading(true);
    try {
      const courseData = {
        title: selectedCourse.title,
        instructor: selectedCourse.instructor_name || 'Expert Instructor',
        rating: 4.8,
        review_count: 1000,
        student_count: 5000,
        price: 89.99,
        original_price: 199.99,
        duration: selectedCourse.duration || '40 hours',
        lecture_count: 100,
        level: 'Intermediate',
        image_url: selectedCourse.image_url || '',
        tags: ['Featured Course'],
        last_updated: 'January 2024',
        is_bestseller: false,
        is_hot: true,
        is_new: false,
        is_active: true,
        display_order: topCourses.length + 1
      };

      const { error } = await supabase
        .from('top_courses')
        .insert([courseData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Course added to top courses successfully"
      });

      setSelectedCourseId('');
      setIsAddFromDatabaseOpen(false);
      fetchTopCourses();
    } catch (error) {
      console.error('Error adding course from database:', error);
      toast({
        title: "Error",
        description: "Failed to add course to top courses",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const courseData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        display_order: editingCourse ? editingCourse.display_order : topCourses.length + 1
      };

      if (editingCourse) {
        const { error } = await supabase
          .from('top_courses')
          .update(courseData)
          .eq('id', editingCourse.id);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Top course updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('top_courses')
          .insert([courseData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Top course created successfully"
        });
      }

      resetForm();
      setIsCreateModalOpen(false);
      setEditingCourse(null);
      fetchTopCourses();
    } catch (error) {
      console.error('Error saving top course:', error);
      toast({
        title: "Error",
        description: "Failed to save top course",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (courseId: string) => {
    if (!confirm('Are you sure you want to delete this top course?')) return;

    try {
      const { error } = await supabase
        .from('top_courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Top course deleted successfully"
      });
      fetchTopCourses();
    } catch (error) {
      console.error('Error deleting top course:', error);
      toast({
        title: "Error",
        description: "Failed to delete top course",
        variant: "destructive"
      });
    }
  };

  const updateDisplayOrder = async (courseId: string, direction: 'up' | 'down') => {
    const course = topCourses.find(c => c.id === courseId);
    if (!course) return;

    const currentOrder = course.display_order;
    const targetOrder = direction === 'up' ? currentOrder - 1 : currentOrder + 1;
    
    const targetCourse = topCourses.find(c => c.display_order === targetOrder);
    if (!targetCourse) return;

    try {
      // Swap display orders
      await supabase
        .from('top_courses')
        .update({ display_order: targetOrder })
        .eq('id', courseId);

      await supabase
        .from('top_courses')
        .update({ display_order: currentOrder })
        .eq('id', targetCourse.id);

      fetchTopCourses();
    } catch (error) {
      console.error('Error updating display order:', error);
      toast({
        title: "Error",
        description: "Failed to update course order",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      instructor: '',
      rating: 4.8,
      review_count: 1000,
      student_count: 5000,
      price: 89.99,
      original_price: 199.99,
      duration: '40 hours',
      lecture_count: 100,
      level: 'Intermediate',
      image_url: '',
      tags: '',
      last_updated: 'January 2024',
      is_bestseller: false,
      is_hot: false,
      is_new: false,
      is_active: true
    });
  };

  const handleEdit = (course: TopCourse) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      instructor: course.instructor,
      rating: course.rating,
      review_count: course.review_count,
      student_count: course.student_count,
      price: course.price,
      original_price: course.original_price,
      duration: course.duration,
      lecture_count: course.lecture_count,
      level: course.level,
      image_url: course.image_url,
      tags: course.tags.join(', '),
      last_updated: course.last_updated,
      is_bestseller: course.is_bestseller,
      is_hot: course.is_hot,
      is_new: course.is_new,
      is_active: course.is_active
    });
    setIsCreateModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            Create Custom Course
          <p className="text-muted-foreground">Manage courses that appear in the "Our Top Courses" section</p>
          <Dialog open={isAddFromDatabaseOpen} onOpenChange={setIsAddFromDatabaseOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Database className="h-4 w-4 mr-2" />
                Add from Database
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Course from Database</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="course-select">Select Course</Label>
                  <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course to add to top courses" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCourses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{course.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {course.instructor_name} • {course.duration}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {selectedCourseId && (
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Preview</h4>
                    {(() => {
                      const course = availableCourses.find(c => c.id === selectedCourseId);
                      return course ? (
                        <div className="space-y-2 text-sm">
                          <p><strong>Title:</strong> {course.title}</p>
                          <p><strong>Instructor:</strong> {course.instructor_name || 'Expert Instructor'}</p>
                          <p><strong>Duration:</strong> {course.duration || '40 hours'}</p>
                          <p className="text-muted-foreground">{course.description?.substring(0, 100)}...</p>
                        </div>
                      ) : null;
                    })()}
                  </div>
                )}

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsAddFromDatabaseOpen(false);
                      setSelectedCourseId('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={addCourseFromDatabase}
                    disabled={loading || !selectedCourseId}
                  >
                    {loading ? 'Adding...' : 'Add to Top Courses'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={(open) => {
          setIsCreateModalOpen(open);
          if (!open) {
            setEditingCourse(null);
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Top Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? 'Edit Top Course' : 'Create Custom Top Course'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Course Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="instructor">Instructor *</Label>
                  <Input
                    id="instructor"
                    value={formData.instructor}
                    onChange={(e) => setFormData(prev => ({ ...prev, instructor: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <ImageUpload
                  label="Course Image"
                  value={formData.image_url}
                  onChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
                  placeholder="Upload course thumbnail image"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="review_count">Review Count</Label>
                  <Input
                    id="review_count"
                    type="number"
                    value={formData.review_count}
                    onChange={(e) => setFormData(prev => ({ ...prev, review_count: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="student_count">Student Count</Label>
                  <Input
                    id="student_count"
                    type="number"
                    value={formData.student_count}
                    onChange={(e) => setFormData(prev => ({ ...prev, student_count: parseInt(e.target.value) }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="original_price">Original Price</Label>
                  <Input
                    id="original_price"
                    type="number"
                    step="0.01"
                    value={formData.original_price}
                    onChange={(e) => setFormData(prev => ({ ...prev, original_price: parseFloat(e.target.value) }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder="e.g., 40 hours"
                  />
                </div>
                <div>
                  <Label htmlFor="lecture_count">Lecture Count</Label>
                  <Input
                    id="lecture_count"
                    type="number"
                    value={formData.lecture_count}
                    onChange={(e) => setFormData(prev => ({ ...prev, lecture_count: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="level">Level</Label>
                  <Select value={formData.level} onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="e.g., Ethical Hacking, Penetration Testing, Cybersecurity"
                />
              </div>

              <div>
                <Label htmlFor="last_updated">Last Updated</Label>
                <Input
                  id="last_updated"
                  value={formData.last_updated}
                  onChange={(e) => setFormData(prev => ({ ...prev, last_updated: e.target.value }))}
                  placeholder="e.g., January 2024"
                />
              </div>

              {/* Course Badges */}
              <div className="space-y-4">
                <Label>Course Badges</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_bestseller}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_bestseller: checked }))}
                    />
                    <Label>Bestseller</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_hot}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_hot: checked }))}
                    />
                    <Label>Hot</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_new}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_new: checked }))}
                    />
                    <Label>New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                    />
                    <Label>Active</Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    setEditingCourse(null);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : editingCourse ? 'Update Course' : 'Create Course'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Featured Courses ({topCourses.length})
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            These courses will appear in the "Featured Courses" section on the homepage. Changes are reflected in real-time.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCourses.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No featured courses found. Add courses from the database or create custom ones to get started.
              </div>
            ) : (
              <div className="space-y-4">
                {topCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="flex items-center gap-4 p-4 border rounded-lg bg-card"
                  >
                    {/* Course Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={course.image_url || '/placeholder.svg'}
                        alt={course.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-lg truncate">{course.title}</h4>
                        <div className="flex gap-1">
                          {course.is_bestseller && <Badge className="bg-orange-500 text-white text-xs">Bestseller</Badge>}
                          {course.is_hot && <Badge className="bg-red-500 text-white text-xs">Hot</Badge>}
                          {course.is_new && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
                          {!course.is_active && <Badge variant="secondary" className="text-xs">Inactive</Badge>}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">By {course.instructor}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{course.student_count.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>{course.lecture_count} lectures</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateDisplayOrder(course.id, 'up')}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateDisplayOrder(course.id, 'down')}
                          disabled={index === topCourses.length - 1}
                        >
                          <ArrowDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteCourse(course.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCoursesManagement;