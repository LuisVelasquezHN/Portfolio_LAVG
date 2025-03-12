import { IconCircleChevronRight } from '@tabler/icons-react';
import React from 'react'
import { Link } from "react-router-dom";

export const Breadcrumb = ({ items }) => {
    return (
        <nav className="p-8 flex flex-wrap items-center text-md text-[#515151] dark:text-[#b9b8b8]">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index !== 0 && <IconCircleChevronRight className="w-4 h-4 mx-1 text-gray-500" />}
                    {index === items.length - 1 ? (
                        <span className="text-blue-400">{item.label}</span>
                    ) : (
                        <Link to={item.path} className="hover:text-blue-400 transition">
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>)
}
