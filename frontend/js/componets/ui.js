export function showLoading(container) {
  container.innerHTML = `
    <div class="loading-state">
      <h2>Loading...</h2>
      <p>Please wait while we fetch the data.</p>
    </div>
  `;
}

export function showError(container, message = "Something went wrong.") {
  container.innerHTML = `
    <div class="no-result">
      <h2>Oops!</h2>
      <p>${message}</p>

      <a href="courses.html" class="back-btn">
        Back to Courses
      </a>
    </div>
  `;
}

export function showEmpty(container, message = "No data found.") {
  container.innerHTML = `
    <div class="no-result">
      <h2>No Results</h2>
      <p>${message}</p>
    </div>
  `;
}