import Link from "next/link"

const TutorialBadge = ({ link }) => {
  return (
    <div className="bg-orange-600 rounded-full px-2 py-0 my-1">
      <p className="text-gray-200 font-semibold">
        <Link href={link}>Tutorial</Link>
      </p>
    </div>
  )
}

export default TutorialBadge