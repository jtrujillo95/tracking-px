import RemarkText from "../remark-text/remark-text"

const HeadingText = ({text, remarkText}) => {
  return (
    <header className="flex justify-center">
      <RemarkText text={text} remarkableText={remarkText} />
    </header>
  )
}

export default HeadingText
