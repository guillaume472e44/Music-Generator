import { useRef } from "react";
import styles from "./DoubleDropdown.module.css";

export default function DoubleDropdown() {
  const subCategoriesRef = useRef<HTMLDivElement>(null);

  function handleMouseOver() {
    subCategoriesRef.current?.showPopover();
  }

  function handleMouseLeave() {
    if (subCategoriesRef.current?.matches(":popover-open")) {
      subCategoriesRef.current.hidePopover();
    }
  }

  return (
    <>
      <button
        popoverTarget="mainpopover"
        popoverTargetAction="toggle"
        className={styles.sampleSelect}
      >
        Select sample <span>v</span>
      </button>
      <div id="mainpopover" popover="auto" className={styles.categories}>
        <nav>
          <button> category 1</button>
          <div
            className={styles.subContainer}
            tabIndex={0}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <button popoverTarget="subpopover" popoverTargetAction="toggle">
              category 2 <span>{">"}</span>
            </button>
            <div
              ref={subCategoriesRef}
              id="subpopover"
              popover="auto"
              className={styles.subCategories}
            >
              <button>Hard-Kick_001</button>
            </div>
          </div>
          <button>category 3</button>
        </nav>
      </div>
    </>
  );
}
