# Tooltip Component

### PropTypes
* oneOf()
```javascript
Tooltip.propTypes = {
  allowToggleWithClick: PropTypes.bool,
  allowToggleWithMouseInteraction: PropTypes.bool,
  positionWhereShowText: PropTypes.oneOf(['bottom', 'top']),

}

Tooltip.defaultProps = {
  allowToggleWithClick: false,
  allowToggleWithMouseInteraction: true,
  positionWhereShowText: 'bottom',
}
```
