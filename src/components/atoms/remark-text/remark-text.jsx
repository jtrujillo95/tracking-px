const RemarkText = ({ text, remarkableText, fontSize = 'font-bold text-5xl' }) => {
	return (
		<p className={fontSize}>{text} <span className="text-purple-900">{remarkableText}</span></p>
	)
}

export default RemarkText
