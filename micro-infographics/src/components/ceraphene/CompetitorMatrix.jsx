import React from "react";

const C = "#64748b";

export default function CerCompetitorMatrix() {
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

  const tableWrap = {
    marginBottom: 36,
    overflowX: "auto",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12,
  };

  const thSpec = {
    backgroundColor: "#1a1a1a",
    color: "#9ca3af",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 1,
    padding: "10px 12px",
    textAlign: "left",
    textTransform: "uppercase",
    borderBottom: "1px solid #1f1f1f",
  };

  const thCeraphene = {
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

  const thComp = {
    backgroundColor: "#222",
    color: "#9ca3af",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 1,
    padding: "10px 12px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const tdSpec = {
    padding: "10px 12px",
    borderBottom: "1px solid #1f1f1f",
    color: "#9ca3af",
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: "#0d0d0d",
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

  const tdHighlight = {
    ...tdBase,
    color: "#ffffff",
    fontWeight: 700,
    borderLeft: `2px solid ${C}`,
  };

  const tdHighlightAlt = {
    ...tdAlt,
    color: "#ffffff",
    fontWeight: 700,
    borderLeft: `2px solid ${C}`,
  };

  const scoreRow = {
    display: "flex",
    gap: 16,
    marginBottom: 36,
  };

  const scoreCard = {
    flex: 1,
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "20px 16px",
  };

  const scoreCardTitle = {
    fontSize: 12,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 6,
  };

  const scoreNum = {
    fontSize: 48,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    lineHeight: 1,
    marginBottom: 6,
  };

  const scoreLabel = {
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 12,
  };

  const barTrack = {
    width: "100%",
    height: 6,
    backgroundColor: "#1f1f1f",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 8,
  };

  const scoreSub = {
    fontSize: 11,
    color: "#6b7280",
    lineHeight: 1.5,
  };

  const bulletRow = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 36,
  };

  const bulletCard = {
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderLeft: `3px solid ${C}`,
    borderRadius: 8,
    padding: "16px 20px",
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
  };

  const bulletTitle = {
    minWidth: 180,
    fontSize: 12,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    letterSpacing: 1,
    textTransform: "uppercase",
    paddingTop: 2,
  };

  const bulletText = {
    flex: 1,
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.7,
  };

  const footer = {
    borderTop: "1px solid #1f1f1f",
    paddingTop: 16,
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.6,
  };

  const rows = [
    ["Pencil hardness", "9H+", "9H", "9H", "9H", false],
    ["Nano-indentation", "8-11 GPa", "5-7 GPa", "5-8 GPa", "4-6 GPa", true],
    ["Contact angle", ">115deg", ">105deg", ">110deg", ">100deg", false],
    ["Durability", "3-4+ yr", "2-3 yr", "2-4 yr", "1-2 yr", true],
    ["Graphene enhanced", "Yes (GNP)", "No", "No", "No", false],
    ["Thermal protection", "Yes (200 degC)", "No data", "No data", "No data", true],
    ["Price per vehicle", "Rs.5,000", "Rs.12,000-18,000", "Rs.15,000-22,000", "Rs.8,000-14,000", false],
    ["NABL test report", "Yes", "Not public", "Not public", "Not public", true],
  ];

  return (
    <div style={wrap}>
      <div style={brandLabel}>Monoatom Labs · Ceraphene</div>
      <div style={mainTitle}>COMPETITOR MATRIX</div>
      <div style={subtitle}>Graphene-Enhanced Ceramic Coating · Detailed Head-to-Head Comparison</div>

      {/* Section 1 */}
      <div style={sectionTitle}>Full Specification Comparison</div>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={thSpec}>Spec</th>
              <th style={thCeraphene}>CERAPHENE</th>
              <th style={thComp}>IGL Kenzo</th>
              <th style={thComp}>Ceramic Pro 9H</th>
              <th style={thComp}>CarPro CQuartz</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([spec, cer, igl, cp, carp, isAlt], i) => (
              <tr key={i}>
                <td style={isAlt ? { ...tdSpec, backgroundColor: "#111" } : tdSpec}>{spec}</td>
                <td style={isAlt ? tdHighlightAlt : tdHighlight}>{cer}</td>
                <td style={isAlt ? tdAlt : tdBase}>{igl}</td>
                <td style={isAlt ? tdAlt : tdBase}>{cp}</td>
                <td style={isAlt ? tdAlt : tdBase}>{carp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <div style={sectionTitle}>Value Score</div>
      <div style={scoreRow}>
        <div style={{ ...scoreCard, borderTop: `2px solid ${C}` }}>
          <div style={scoreCardTitle}>CERAPHENE</div>
          <div style={scoreNum}>9.4</div>
          <div style={scoreLabel}>/ 10 Value Score</div>
          <div style={barTrack}>
            <div style={{ width: "94%", height: "100%", backgroundColor: C, borderRadius: 3 }} />
          </div>
          <div style={scoreSub}>9H+ hardness / Rs.5k — highest performance per rupee. GNP advantage exclusive.</div>
        </div>
        <div style={scoreCard}>
          <div style={scoreCardTitle}>IGL Kenzo</div>
          <div style={{ ...scoreNum, color: "#6b7280" }}>6.2</div>
          <div style={scoreLabel}>/ 10 Value Score</div>
          <div style={barTrack}>
            <div style={{ width: "62%", height: "100%", backgroundColor: "#374151", borderRadius: 3 }} />
          </div>
          <div style={scoreSub}>9H / Rs.15k avg — good quality, premium priced. No graphene technology.</div>
        </div>
        <div style={scoreCard}>
          <div style={scoreCardTitle}>Ceramic Pro 9H</div>
          <div style={{ ...scoreNum, color: "#6b7280" }}>5.8</div>
          <div style={scoreLabel}>/ 10 Value Score</div>
          <div style={barTrack}>
            <div style={{ width: "58%", height: "100%", backgroundColor: "#374151", borderRadius: 3 }} />
          </div>
          <div style={scoreSub}>9H / Rs.18k avg — premium brand recognition, no graphene advantage.</div>
        </div>
        <div style={scoreCard}>
          <div style={scoreCardTitle}>CarPro CQuartz</div>
          <div style={{ ...scoreNum, color: "#6b7280" }}>6.5</div>
          <div style={scoreLabel}>/ 10 Value Score</div>
          <div style={barTrack}>
            <div style={{ width: "65%", height: "100%", backgroundColor: "#374151", borderRadius: 3 }} />
          </div>
          <div style={scoreSub}>9H / Rs.11k avg — good entry point, but shorter durability at 1-2 yr.</div>
        </div>
      </div>

      {/* Section 3 */}
      <div style={sectionTitle}>Why CERAPHENE Wins on Science</div>
      <div style={bulletRow}>
        <div style={bulletCard}>
          <div style={bulletTitle}>GNP Reinforcement</div>
          <div style={bulletText}>Only CERAPHENE uses GNP lattice (E-modulus ~1 TPa) within ceramic matrix. Competitors use standard SiO2 only. Result: 2-3x higher actual measured nano-indentation hardness at 8-11 GPa vs 4-8 GPa.</div>
        </div>
        <div style={bulletCard}>
          <div style={bulletTitle}>Thermal Data</div>
          <div style={bulletText}>Only CERAPHENE publishes thermal performance data (8-12 degC panel temperature reduction, stable to 200 degC). Competitors have no published thermal specifications — cannot verify performance claims.</div>
        </div>
        <div style={bulletCard}>
          <div style={bulletTitle}>Price Disruption</div>
          <div style={bulletText}>CERAPHENE at Rs.5,000 vs Rs.12,000-22,000 competitors — same or better specifications at 60-75% lower cost. Enabled by Indian manufacturing at scale using domestic GNP supply chain.</div>
        </div>
      </div>

      <div style={footer}>
        Competitor prices from authorised studio quotes (Mumbai, Feb 2025). Performance data from published datasheets + independent NABL testing. CERAPHENE data: internal + DRDO Pune.
      </div>
    </div>
  );
}
