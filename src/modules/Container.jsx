import './Container.css';

const Container = ({ children, gridArea, className = '' }) => {
  return (
    <div 
      className={`container ${className}`} 
      style={gridArea ? { gridArea } : undefined}
    >
      {children}
    </div>
  );
};

export default Container;
