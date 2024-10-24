


export function addPositionGrid(boxCard) {
    let y = 12;
    boxCard.forEach((e, i) => {
      e.style.gridRow = `1/2`;
      e.style.gridColumn = `${i + 1}/${i + 2}`;
    
      if (i >= y) {
        e.style.gridRow = `2/3`;
        e.style.gridColumn = `${i - (y - 1)}/${i - (y - 2)}`;
      }
      if (i >= y * 2) {
        e.style.gridRow = `3/4`;
        e.style.gridColumn = `${i - (y * 2 - 1)}/${i - (y * 2 - 2)}`;
      }
      if (i >= y * 3) {
        e.style.gridRow = `4/5`;
        e.style.gridColumn = `${i - (y * 3 - 1)}/${i - (y * 3 - 2)}`;
      }
    });
    }