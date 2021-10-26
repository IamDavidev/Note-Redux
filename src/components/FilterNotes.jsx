const FilterNotes = () => {
  return (
    <div className="filter-notes">
      all <input type="radio" name="all" id="alll__notes" />
      important <input type="radio" name="important" id="important__notes" />
      !important <input type="radio" name="!important" id="!importan__notes" />
    </div>
  );
};


export default FilterNotes;