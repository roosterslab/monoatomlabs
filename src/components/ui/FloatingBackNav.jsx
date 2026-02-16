import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FloatingBackNav = ({ to = "/products/pipeline", label = "Back to Innovation Pipeline" }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-6 right-6 z-50"
    >
        <Link to={to} className="group flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all">
            <span className="text-sm font-bold uppercase tracking-wider text-neutral-600 group-hover:text-neutral-900 transition-colors">
                {label}
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <ArrowRight size={16} />
            </div>
        </Link>
    </motion.div>
);

export default FloatingBackNav;
