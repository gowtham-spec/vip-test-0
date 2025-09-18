import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CourseInquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const CourseInquiryPopup = ({ isOpen, onClose, courseTitle }: CourseInquiryPopupProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          {/* Popup */}
          <motion.div
            className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white rounded-3xl shadow-2xl max-w-md w-96"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Course Inquiry</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-slate-800"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="flex">
                  <div className="bg-slate-800 border border-slate-700 rounded-l-md px-3 py-2 text-yellow-400 font-medium">
                    IN +91
                  </div>
                  <Input
                    placeholder="Enter Phone Number*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 rounded-l-none border-l-0"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Please let us know how we can help! *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 min-h-[100px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white py-3 text-lg font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseInquiryPopup;