window.addEventListener("load", async () => {
  console.log("Virtuele Redirect Extension loaded");

  // Initialize the Trimble Connect Workspace API
  const workspaceAPI = await window.trimble.connect.workspace.getAPI();

  // Log basic project info for reference
  const project = await workspaceAPI.getCurrentProject();
  console.log("Current Project:", project);

  // Add button click listener
  const redirectBtn = document.getElementById("redirectBtn");
  redirectBtn.addEventListener("click", () => {
    window.open("https://clbdev.virtuele.us", "_blank");
  });
});
