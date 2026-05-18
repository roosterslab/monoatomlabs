import React from "react";

const C = "#64748b";

export default function CerFleetManagementDashboard() {
  const wrap = {
    backgroundColor: "#050505",
    fontFamily: "Inter, sans-serif",
    color: "#e5e5e5",
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px",
  };

  const brandLabel = {
    fontSize: 11,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 3,
    color: C,
    textTransform: "uppercase",
    marginBottom: 6,
  };

  const mainTitle = {
    fontSize: 32,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 2,
    marginBottom: 6,
  };

  const subtitle = {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 36,
  };

  const sectionTitle = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 2,
    color: C,
    textTransform: "uppercase",
    marginBottom: 18,
    paddingBottom: 8,
    borderBottom: "1px solid #1f1f1f",
  };

  const fleetRow = {
    display: "flex",
    gap: 16,
    marginBottom: 36,
  };

  const fleetCard = {
    flex: 1,
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "20px 16px",
  };

  const fleetType = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 14,
  };

  const investLabel = {
    fontSize: 11,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  };

  const investAmt = {
    fontSize: 52,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    lineHeight: 1,
    marginBottom: 4,
  };

  const investUnit = {
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 14,
  };

  const metricLine = {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.7,
    marginBottom: 4,
  };

  const paybackBadge = {
    display: "inline-block",
    marginTop: 12,
    backgroundColor: "rgba(100,116,139,0.15)",
    border: `1px solid ${C}`,
    borderRadius: 4,
    padding: "4px 10px",
    fontSize: 12,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    letterSpacing: 1,
  };

  const tableWrap = {
    marginBottom: 36,
    overflowX: "auto",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12,
  };

  const thCell = {
    backgroundColor: C,
    color: "#ffffff",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 1,
    padding: "10px 12px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const tdBase = {
    padding: "10px 12px",
    borderBottom: "1px solid #1f1f1f",
    color: "#d1d5db",
    fontSize: 12,
  };

  const tdAlt = {
    ...tdBase,
    backgroundColor: "#0d0d0d",
  };

  const calendarRows = [
    {
      q: "Q1",
      season: "Jan-Mar",
      title: "Cold-Weather Protocol",
      actions: [
        "Cold-weather wash protocol check across entire fleet",
        "Road salt decontamination treatment for north India vehicles",
      ],
    },
    {
      q: "Q2",
      season: "Apr-Jun",
      title: "Summer Inspection",
      actions: [
        "IR beading test on 10% vehicle sample — flag any degradation",
        "UV performance check; reconfirm contact angle on flagged units",
      ],
    },
    {
      q: "Q3",
      season: "Jul-Sep",
      title: "Post-Monsoon Decon",
      actions: [
        "Post-monsoon decontamination wash — remove acid residue",
        "Iron fallout spray treatment fleet-wide before winter season",
      ],
    },
    {
      q: "Q4",
      season: "Oct-Dec",
      title: "Annual Assessment",
      actions: [
        "Annual contact angle measurement — full fleet goniometer check",
        "Studio certification renewal + recoat flagging for 3-year vehicles",
      ],
    },
  ];

  const calendarWrap = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 36,
  };

  const calRow = {
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "16px 20px",
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
  };

  const qCircle = {
    minWidth: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: C,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    marginTop: 2,
  };

  const calContent = {
    flex: 1,
  };

  const calTitle = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 1,
    marginBottom: 2,
  };

  const calSeason = {
    fontSize: 11,
    color: C,
    marginBottom: 8,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
  };

  const calAction = {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.6,
    paddingLeft: 12,
    borderLeft: "2px solid #1f1f1f",
    marginBottom: 4,
  };

  const pillRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 36,
  };

  const pill = {
    backgroundColor: "#111",
    border: `1px solid ${C}`,
    borderRadius: 6,
    padding: "10px 18px",
    fontSize: 12,
    color: "#d1d5db",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 600,
    letterSpacing: 0.5,
  };

  const footer = {
    borderTop: "1px solid #1f1f1f",
    paddingTop: 16,
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.6,
  };

  return (
    <div style={wrap}>
      <div style={brandLabel}>Monoatom Labs · Ceraphene</div>
      <div style={mainTitle}>FLEET MANAGEMENT DASHBOARD</div>
      <div style={subtitle}>Graphene-Enhanced Ceramic Coating · Multi-Fleet Operator ROI &amp; Programme Management</div>

      {/* Section 1 */}
      <div style={sectionTitle}>Programme Economics by Fleet Operator Type</div>
      <div style={fleetRow}>
        <div style={fleetCard}>
          <div style={fleetType}>Corporate Fleet</div>
          <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>100 Vehicles</div>
          <div style={investLabel}>Investment</div>
          <div style={investAmt}>5L</div>
          <div style={investUnit}>Rs. 5,00,000</div>
          <div style={metricLine}>Wash savings: Rs. 4,80,000/yr</div>
          <div style={metricLine}>Paint protection: Rs. 2,40,000/yr</div>
          <div style={metricLine}>Resale uplift: Rs. 18,00,000 (once)</div>
          <div style={metricLine}>Annual cash saving: Rs. 7,20,000/yr</div>
          <div style={metricLine}>4-yr cumulative: Rs. 46.8L</div>
          <div style={paybackBadge}>Payback: 8 months</div>
        </div>
        <div style={fleetCard}>
          <div style={fleetType}>Cab Aggregator</div>
          <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>500 Vehicles</div>
          <div style={investLabel}>Investment</div>
          <div style={investAmt}>25L</div>
          <div style={investUnit}>Rs. 25,00,000</div>
          <div style={metricLine}>Annual saving: Rs. 36,00,000</div>
          <div style={metricLine}>(wash + maintenance combined)</div>
          <div style={metricLine}>Year 4 net benefit: Rs. 1.19 Cr</div>
          <div style={metricLine}>Saving per vehicle: Rs. 7,200/yr</div>
          <div style={paybackBadge}>Payback: 8.3 months</div>
        </div>
        <div style={fleetCard}>
          <div style={fleetType}>Govt. Transport</div>
          <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>200 Buses</div>
          <div style={investLabel}>Investment</div>
          <div style={investAmt}>10L</div>
          <div style={investUnit}>Rs. 10,00,000</div>
          <div style={metricLine}>Annual saving: Rs. 25,00,000</div>
          <div style={metricLine}>Bus wash reduced from 100 to 20</div>
          <div style={metricLine}>washes/yr at Rs. 1,250/wash</div>
          <div style={metricLine}>Saving per bus: Rs. 12,500/yr</div>
          <div style={paybackBadge}>Payback: 4.8 months</div>
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionTitle}>Recommended Application Schedule</div>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={thCell}>Fleet Size</th>
              <th style={thCell}>Vehicles / Day</th>
              <th style={thCell}>Days to Complete</th>
              <th style={thCell}>Recommended Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdBase}>20 vehicles</td>
              <td style={tdBase}>3-4</td>
              <td style={tdBase}>5-7 days</td>
              <td style={tdBase}>Single studio, weekend blitz</td>
            </tr>
            <tr>
              <td style={tdAlt}>100 vehicles</td>
              <td style={tdAlt}>5-8</td>
              <td style={tdAlt}>2-3 weeks</td>
              <td style={tdAlt}>2-studio rotation</td>
            </tr>
            <tr>
              <td style={tdBase}>500 vehicles</td>
              <td style={tdBase}>10-15</td>
              <td style={tdBase}>5-7 weeks</td>
              <td style={tdBase}>Mobile team + 3 studios</td>
            </tr>
            <tr>
              <td style={tdAlt}>1000+ vehicles</td>
              <td style={tdAlt}>20-30</td>
              <td style={tdAlt}>8-12 weeks</td>
              <td style={tdAlt}>Dedicated programme manager + 5 studios</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <div style={sectionTitle}>Fleet Maintenance Protocol — Annual Calendar</div>
      <div style={calendarWrap}>
        {calendarRows.map((row, i) => (
          <div key={i} style={calRow}>
            <div style={qCircle}>{row.q}</div>
            <div style={calContent}>
              <div style={calSeason}>{row.season}</div>
              <div style={calTitle}>{row.title}</div>
              {row.actions.map((a, j) => (
                <div key={j} style={{ ...calAction, marginTop: j === 0 ? 8 : 0 }}>{a}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Section 4 */}
      <div style={sectionTitle}>Fleet Programme Management</div>
      <div style={pillRow}>
        <div style={pill}>Dedicated account manager assigned</div>
        <div style={pill}>Monthly performance report (beading score per vehicle)</div>
        <div style={pill}>Priority booking at 70+ studio network</div>
        <div style={pill}>Digital warranty registry per vehicle VIN</div>
      </div>

      <div style={footer}>
        Fleet pricing: 20+ vehicles 20% discount &nbsp;·&nbsp; 100+ vehicles 30% discount &nbsp;·&nbsp; 500+ vehicles custom contract. Contact: fleet@monoatomlabs.com
      </div>
    </div>
  );
}
