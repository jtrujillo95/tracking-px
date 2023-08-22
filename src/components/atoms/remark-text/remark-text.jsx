const RemarkText = ({ text, remarkableText }) => {
	return (
		<p className="font-bold text-3xl">{text} <span className="text-purple-900">{remarkableText}</span></p>
	)
}

export default RemarkText
