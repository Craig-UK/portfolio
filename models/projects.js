import { Schema, model, models } from "mongoose";

const ProjectsSchema = new Schema({
    title: {
        type: String,
        ref: 'Project Title'
    },
    category: {
        type: String
    },
    github: {
        type: String
    },
    logo: {
        type: Array
    },
    summary: {
        type: String
    },
    images: {
        type: Array
    },
    deployed: {
        type: String
    },
    description: {
        type: String
    },
    limitations: {
        type: String
    }
});

const Project = models.Project || model('Project', ProjectsSchema);

export default Project;