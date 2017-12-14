var selectedToDo;

export function updateToDo(newLI_id) {

  document.getElementById("UpdateToDo" + newLI_id).addEventListener("click", function () {
    import(/* webpackChunkName: "updateForm" */ './updateForm')
      .then(module => {
        var updateForm = module.default;
        selectedToDo = this.id.substr(10, 18);
        updateForm(selectedToDo);
      });
  });
}
