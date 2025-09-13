import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`rounded-2xl border bg-white shadow-sm ${className}`} {...props}>{children}</div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`p-6 border-b ${className}`} {...props}>{children}</div>
);
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>{children}</div>
);
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`p-6 border-t ${className}`} {...props}>{children}</div>
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'primary'|'secondary'|'outline', size?: 'sm'|'md'|'lg'}> = ({ className='', variant='primary', size='md', children, ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none';
  const sizes = { sm: 'px-3 py-2 text-sm', md: 'px-4 py-2.5', lg: 'px-5 py-3 text-lg' };
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
    outline: 'border border-slate-300 text-slate-900 hover:bg-slate-100'
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>{children}</button>
};

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className='', children, ...props }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold bg-slate-100 text-slate-700 ${className}`} {...props}>{children}</span>
);

// Basic Tabs
export function Tabs({ tabs, current, onChange }: { tabs: { id:string, label:string }[], current: string, onChange: (id:string)=>void }){
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-200 p-1">
        {tabs.map(t => (
          <button key={t.id} onClick={()=>onChange(t.id)} className={`rounded-2xl py-2 text-sm font-medium ${current===t.id ? 'bg-white shadow' : 'text-slate-600 hover:bg-white/60'}`}>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
