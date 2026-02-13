#!/bin/bash

# Script to update all dark background sections to use DRY components

INFOGRAPHICS_DIR="C:/Users/globql-ws/Documents/project-raj-sir/monoatoms/website/src/components/product-infographics"

# List of files to update
files=(
    "AwardsWall.jsx"
    "BeforeAfterSlider.jsx"
    "CerapheneCostComparison.jsx"
    "CompanyStatisticsDashboard.jsx"
    "CompetitiveAdvantageMatrix.jsx"
    "CustomerSuccessStories.jsx"
    "GraffisolEnergyCalculator.jsx"
    "GraffisolSolarApplications.jsx"
    "GraphacreteApplications.jsx"
    "HDGPEPerformanceCalculator.jsx"
    "HDGPEPolymerApplications.jsx"
    "HowItWorksSimple.jsx"
    "InnovationPipelineTimeline.jsx"
    "InteractiveROICalculator.jsx"
    "LivePerformanceSimulator.jsx"
    "ProductPerformanceCards.jsx"
    "ProductSelectorQuiz.jsx"
    "RDFacilitiesOverview.jsx"
    "ROICostSavingsDisplay.jsx"
    "VideoShowcaseSection.jsx"
)

echo "Files to update: ${#files[@]}"
for file in "${files[@]}"; do
    echo "  - $file"
done
