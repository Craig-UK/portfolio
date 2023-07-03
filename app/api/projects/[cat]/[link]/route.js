import { connectToDB } from '@utils/database'
import Project from '@models/projects'

export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    console.log(`In /api/projects/${params.cat}/${params.link}`)

    const projects = await Project.find({
      category: params.cat,
      link: params.link
    })

    return new Response(JSON.stringify(projects), {
      status: 200
    })
  } catch (error) {
    return new Response('Failed to fetch all projects', { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
