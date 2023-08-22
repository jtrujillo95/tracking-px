import RemarkText from "../remark-text/remark-text"

const HeadingText = ({text, remarkText}) => {
  return (
    <header>
      <RemarkText text={text} remarkableText={remarkText} />
    </header>
  )
}

export default HeadingText
