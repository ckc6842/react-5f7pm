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

### 툴팁 위치 수정
* 기본 위치 이동 : 텍스트 하단 -> 텍스트 상단
