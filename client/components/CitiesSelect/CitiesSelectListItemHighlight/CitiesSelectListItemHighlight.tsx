interface CitiesSelectListItemHighlightProps {
  parts: { 
    highlight: boolean
    text: string 
  }[]
}

const CitiesSelectListItemHighlight: React.FC<CitiesSelectListItemHighlightProps> = ({ parts }) => (
  <>
    {parts.map((part, index) => (
      <span
        key={index}
        style={{
          fontWeight: part.highlight ? 700 : 400,
        }}
      >
        {part.text}
      </span>
    ))}
  </>
);

export default CitiesSelectListItemHighlight;
