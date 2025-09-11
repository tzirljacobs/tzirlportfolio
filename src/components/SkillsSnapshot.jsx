import React from 'react';
import { Code2, Database, Palette, Bot } from 'lucide-react';

export default function SkillsSnapshot() {
  return (
    <section className="bg-white py-12 px-6 text-navy">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Skills Snapshot</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Code2 size={32} className="text-accent mb-3" />
            <h3 className="font-semibold mb-2">Frontend</h3>
            <div className="text-sm text-center space-y-1">
              <p>JavaScript</p>
              <p>React</p>
              <p>Tailwind CSS</p>
            </div>
          </div>

          <div className="flex flex-col items-center p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Database size={32} className="text-accent mb-3" />
            <h3 className="font-semibold mb-2">Backend</h3>
            <div className="text-sm text-center space-y-1">
              <p>Python</p>
              <p>PostgreSQL</p>
              <p>Node.js</p>
            </div>
          </div>

          <div className="flex flex-col items-center p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Palette size={32} className="text-accent mb-3" />
            <h3 className="font-semibold mb-2">Design</h3>
            <div className="text-sm text-center space-y-1">
              <p>Figma</p>
              <p>UX Research</p>
              <p>Wireframing</p>
            </div>
          </div>

          <div className="flex flex-col items-center p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Bot size={32} className="text-accent mb-3" />
            <h3 className="font-semibold mb-2">Tools</h3>
            <div className="text-sm text-center space-y-1">
              <p>Git</p>
              <p>AI Tools</p>
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
