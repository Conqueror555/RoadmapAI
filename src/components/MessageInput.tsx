import React, { useState } from 'react';
import { Send, Briefcase, ChevronDown, Sparkles, Code, Target, CheckCircle } from 'lucide-react';
import { Category } from '../types';

interface MessageInputProps {
  onSendMessage: (text: string, category: Category) => void;
  isGenerating: boolean;
  selectedCategory: Category | null;
}



const categories = [
  { value: 'course' as Category, label: 'Course Planner', icon: CheckCircle, color: 'from-orange-500 to-red-500' },
  { value: 'career' as Category, label: 'Career Planner', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
  { value: 'project' as Category, label: 'Project Planner', icon: Code, color: 'from-indigo-500 to-purple-500' },
  { value: 'skill' as Category, label: 'Skill Planner', icon: Target, color: 'from-green-500 to-emerald-500' },
];



const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isGenerating,
  selectedCategory
}) => {
  const [inputText, setInputText] = useState('');
  const [currentCategory, setCurrentCategory] = useState<Category | null>(selectedCategory);
  const [showDropdown, setShowDropdown] = useState(false);
  


  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (inputText.trim() && !isGenerating && currentCategory) {
    onSendMessage(inputText.trim(), currentCategory);
    setInputText('');
  }
};

  

  const selectedCategoryData = categories.find(cat => cat.value === currentCategory);
  

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[600px] max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Main Input with Category Button */}
        <div className="flex items-center space-x-3">
          {/* Category Selector - IMPROVED: Icon-based design */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg ${
                currentCategory 
                  ? `bg-gradient-to-r ${selectedCategoryData?.color} text-white`
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
              title={selectedCategoryData?.label || 'Select Category'}
            >
              {selectedCategoryData ? (
                <>
                  <selectedCategoryData.icon className="w-5 h-5" />
                  <span className="font-medium whitespace-nowrap">
                    {selectedCategoryData.label}
                  </span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium whitespace-nowrap">
                    Category
                  </span>
                </>
              )}
              <div className={`transform transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {showDropdown && (
              <div className="absolute bottom-full left-0 mb-2 bg-white border border-slate-200 rounded-xl shadow-xl z-10 overflow-hidden min-w-[200px]">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => {
                      setCurrentCategory(category.value);
                      setShowDropdown(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 transition-colors duration-200 ${
                      currentCategory === category.value ? 'bg-slate-50' : ''
                    }`}
                  >
                    <category.icon className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-800 font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="flex-1 flex space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Describe your goal"
              className="flex-1 px-6 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
              disabled={isGenerating}
            />
            {/* IMPROVED: Smaller generate button with only icon */}
            <button
              type="submit"
              disabled={!inputText.trim() || isGenerating || !currentCategory}
              className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center"
              title="Generate"
            >
              {isGenerating ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-sm text-slate-600 text-center">
          {!currentCategory 
            ? 'Please select a category first, then describe your goals'
            : 'Describe your goal to generate a roadmap'
          }
        </p>
      </form>
    </div>
  );
};

export default MessageInput;