import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    <br>${buttonHTML}</br>
    ${submissionHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()