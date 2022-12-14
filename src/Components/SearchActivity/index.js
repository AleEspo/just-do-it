import style from "./style.module.css";

export function SearchActivity(props) {
    function handleFilter(e) {
      props.filteredFunction((prevState) => {
        return props.allActivities.filter((currentElement) => {
          return currentElement.activity
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
      });
      if (e.target.value === "") {
        props.filteredFunction(props.allActivities);
        return;
      }
    }
  
    return (
      <div>
        <input type="text" onChange={handleFilter} placeholder="ex: Learn a new language"/>
      </div>
    );
  }