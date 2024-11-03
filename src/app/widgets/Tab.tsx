'use client'

import React, { useState, ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 -mb-px text-sm font-medium text-center border-b-2 transition-colors duration-300 ${
              activeTab === index ? '-border-tertiary-color -text-tertiary-color' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export { Tabs, Tab };