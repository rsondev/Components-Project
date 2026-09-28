import React from 'react'

/**
 * Renders a labeled set of skill bars, e.g.:
 * <DataStats title="Languages & tools" items={skills} />
 */
export function SkillBars({ title, items }) {
  return (
    <div className="data-block">
      {title && <div className="data-block-title">{title}</div>}
      {items.map((item) => (
        <div className="stat-row" key={item.label}>
          <span className="stat-label">{item.label}</span>
          <span className="stat-track">
            <span
              className="stat-fill"
              style={{ width: `${item.level}%` }}
            />
          </span>
          <span className="stat-value">{item.level}%</span>
        </div>
      ))}
    </div>
  )
}

/**
 * Renders a grid of standalone numeric metrics, e.g.:
 * <MetricGrid items={metrics} />
 */
export function MetricGrid({ items }) {
  return (
    <div className="metric-grid">
      {items.map((item) => (
        <div className="metric-cell" key={item.label}>
          <span className="metric-num">{item.num}</span>
          <span className="metric-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
