import React, { useState } from 'react';
import '../styles/_accordion1.scss';

// WHen clicking on the AccorionItem header we pass the id of the item to the test function,
// it is then used in the handleToggle function as an argument to set the activeIndex state
// everytime you click on a item the activeIndex state is updated with the id of the clicked item
// when you click again on an a new item the toogle functions compares the id of the clicked item
// with the activeIndex state, if they are the same then do nothing but if they are different then
// set the activeIndex state to the clicked item id

// Accordion Item Component
const AccordionItem = ({ id, title, children, isOpen, test }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => test(id)}>
        {/* On click pass the id to the test prop. The id is first recived bfrom the parent as well though the
        id prop and then passed to the test function when you click the item, In that way
        the parent component will know which item is clicked and can set the activeIndex state accordingly
        */}
       {title}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

// Accordion Component
const Accordion1 = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => { // index is the id of the clicked item

    // Toggle the current index or collapse it if it's already open
    // The index is passed from the parent Accordion through the test prop

    setActiveIndex(activeIndex === index ? null : index);
    // it the clicked item id is the same as the active index (the open one) then
    // do nothing but if the clicked item id is different from the active index then
    // set the active index to the clicked item id
  };

  return (
    <div className="accordion">
      {items.map((item, index) => ( // map over the items array and return a AccordionItem component for each item
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          // only show content if the activeIndex is the same as the index
          isOpen={activeIndex === index}
          test={handleToggle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion1;
