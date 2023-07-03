import { connectToDB } from '@utils/database'
import Project from '@models/projects'

export const GET = async (request) => {
  try {
    await connectToDB()

    console.log('In /api/projects/')

    const projects = Project.find({})

    return new Response(JSON.stringify(projects), {
      status: 200
    })
  } catch (error) {
    return new Response('Failed to fetch all projects', { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
