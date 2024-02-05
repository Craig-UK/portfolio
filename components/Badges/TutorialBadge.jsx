import Link from "next/link"

const TutorialBadge = ({ link }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 ring-1 ring-inset ring-orange-500/20">
      <Link href={link}>Tutorial</Link>
    </span>
  )
}

export default TutorialBadge