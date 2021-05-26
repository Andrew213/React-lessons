import React from 'react';
import styles from './dropdown.scss';

interface IDropdownProps{
  button: React.ReactNode;
  children: React.ReactNode;
  Open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {}

export function Dropdown({button,children, Open,onClose = noop,onOpen = noop}:IDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(Open);

  React.useEffect(() => setIsOpen(Open) , [Open])
  React.useEffect(() => isOpen ? onOpen() : onClose() , [isOpen])


  const handleOpen = () => {
    if(Open === undefined){
      setIsOpen(!isOpen)
    }
  }
  
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={()=>setIsOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
