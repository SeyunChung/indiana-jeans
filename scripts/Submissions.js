export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    // Iterate the submissions and create some <section> representations
    let submissionHTML = ""
    for (const submission of submissions) {
        submissionHTML += `<section class="submission">
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
    }
    return submissionHTML
    // Return the HTML string
}




/* export const SubmissionList = async () => {
    // Get the submissions from your API
    const submissions = await getSubmissions(); // Replace this with your API call to fetch submissions

    // Iterate the submissions and create some <section> representations
    const sections = submissions.map((submission) => {
        return `
            <section>
                <h2>${submission.title}</h2>
                <p>${submission.content}</p>
            </section>
        `;
    });

    // Return the HTML string
    return sections.join('');
};
 */