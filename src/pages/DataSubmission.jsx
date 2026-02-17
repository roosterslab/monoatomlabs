import React, { useState } from 'react';
import { Download, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

const DataSubmission = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const products = {
        ceraphene: {
            name: 'Ceraphene',
            subtitle: 'Ceramic Coating',
            color: 'purple',
            accuracy: 85,
            fields: [
                {
                    id: 'competitor_durability_premium',
                    label: 'Competitor Durability - Premium Tier (₹12,000-₹20,000/50ml)',
                    type: 'number',
                    unit: 'years',
                    required: true,
                    priority: 'high'
                },
                {
                    id: 'competitor_durability_midrange',
                    label: 'Competitor Durability - Mid-Range (₹8,000-₹12,000/50ml)',
                    type: 'number',
                    unit: 'years',
                    required: true,
                    priority: 'high'
                },
                {
                    id: 'competitor_durability_economy',
                    label: 'Competitor Durability - Economy (<₹8,000/50ml)',
                    type: 'number',
                    unit: 'years',
                    required: true,
                    priority: 'high'
                }
            ]
        },
        graffisol: {
            name: 'Graffisol',
            subtitle: 'Solar Coating',
            color: 'amber',
            accuracy: 80,
            fields: [
                {
                    id: 'coating_cost_structure',
                    label: 'Installed Coating Cost Structure (₹/kW)',
                    type: 'number',
                    unit: '₹/kW',
                    required: true,
                    priority: 'critical',
                    description: 'Cost per kilowatt of solar panel capacity for coating installation'
                },
                {
                    id: 'generation_rates',
                    label: 'Energy Generation Improvement Rates',
                    type: 'number',
                    unit: '%',
                    required: true,
                    priority: 'high',
                    description: 'Percentage improvement in energy generation with coating'
                }
            ]
        },
        graphacrete: {
            name: 'Graphacrete',
            subtitle: 'Concrete Additive',
            color: 'teal',
            accuracy: 75,
            fields: [
                {
                    id: 'cement_content',
                    label: 'Typical Cement Content in Standard Mix',
                    type: 'number',
                    unit: 'kg/m³',
                    required: true,
                    priority: 'high'
                },
                {
                    id: 'dosage_range_min',
                    label: 'Minimum Dosage Range',
                    type: 'number',
                    unit: '% by cement weight',
                    required: true,
                    priority: 'high'
                },
                {
                    id: 'dosage_range_max',
                    label: 'Maximum Dosage Range',
                    type: 'number',
                    unit: '% by cement weight',
                    required: true,
                    priority: 'high'
                }
            ]
        },
        hdgpe: {
            name: 'HD-G-PE',
            subtitle: 'Polymer Enhancer',
            color: 'cyan',
            accuracy: 75,
            fields: [
                {
                    id: 'additive_pricing_base',
                    label: 'Base Additive Pricing (₹/kg)',
                    type: 'number',
                    unit: '₹/kg',
                    required: true,
                    priority: 'critical'
                },
                {
                    id: 'volume_tier_1000',
                    label: 'Volume Tier Pricing - 1000+ kg',
                    type: 'number',
                    unit: '₹/kg',
                    required: true,
                    priority: 'critical'
                },
                {
                    id: 'volume_tier_5000',
                    label: 'Volume Tier Pricing - 5000+ kg',
                    type: 'number',
                    unit: '₹/kg',
                    required: true,
                    priority: 'critical'
                },
                {
                    id: 'dosage_pipes',
                    label: 'Recommended Dosage - Pipes',
                    type: 'number',
                    unit: '% by weight',
                    required: true,
                    priority: 'critical'
                },
                {
                    id: 'dosage_films',
                    label: 'Recommended Dosage - Films',
                    type: 'number',
                    unit: '% by weight',
                    required: true,
                    priority: 'critical'
                }
            ]
        }
    };

    const handleInputChange = (fieldId, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldId]: value
        }));
    };

    const generateMarkdown = () => {
        const product = products[selectedProduct];
        const timestamp = new Date().toISOString();

        let markdown = `# ROI Calculator Data Submission

## Product: ${product.name}
**Submitted:** ${new Date().toLocaleString()}
**Accuracy Target:** ${product.accuracy}% → 95%+

---

## Submitted Data

`;

        product.fields.forEach(field => {
            const value = formData[field.id] || 'Not provided';
            const priorityBadge = field.priority === 'critical' ? '🚨 CRITICAL' : field.priority === 'high' ? '⚠️ HIGH PRIORITY' : '';

            markdown += `### ${field.label}
${priorityBadge}
**Value:** ${value} ${field.unit || ''}
${field.description ? `**Note:** ${field.description}` : ''}

`;
        });

        markdown += `---

## Next Steps

1. **Review the data** provided above for accuracy
2. **Send this file** to: data-team@monoatomlabs.com
3. **Subject line:** "[${product.name}] ROI Calculator Data Submission"

## Contact

If you have questions or need clarification:
- **Email:** data-team@monoatomlabs.com
- **Technical Lead:** tech-lead@monoatomlabs.com

---

*Generated by Monoatom Labs Data Submission Portal*
*Timestamp: ${timestamp}*
`;

        return markdown;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate markdown
        const markdown = generateMarkdown();

        // Create blob and download
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${selectedProduct}_data_submission_${Date.now()}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Show success message
        setSubmitted(true);

        // Reset after 10 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({});
            setSelectedProduct(null);
        }, 10000);
    };

    const getColorClasses = (color) => ({
        bg: `bg-${color}-50`,
        border: `border-${color}-300`,
        text: `text-${color}-700`,
        button: `bg-${color}-600 hover:bg-${color}-700`,
        ring: `focus:ring-${color}-500`,
        accent: `bg-${color}-100 text-${color}-800`
    });

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
                <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-16 h-16 text-green-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Thank You!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Your data has been downloaded as a markdown file.
                    </p>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                        <h3 className="font-bold text-lg text-blue-900 mb-3">📧 Next Step: Send Us the File</h3>
                        <p className="text-blue-800 mb-4">
                            Please email the downloaded <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">.md</code> file to:
                        </p>
                        <a
                            href={`mailto:data-team@monoatomlabs.com?subject=${products[selectedProduct]?.name} ROI Calculator Data Submission`}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            data-team@monoatomlabs.com
                        </a>
                    </div>

                    <p className="text-sm text-gray-500">
                        Redirecting back to product selection in a few seconds...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-xl">
                <div className="container mx-auto px-6 py-12">
                    <h1 className="text-5xl font-bold mb-3">ROI Calculator Data Submission</h1>
                    <p className="text-teal-100 text-xl">Help us build industry-leading ROI calculators</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 max-w-6xl">

                {!selectedProduct ? (
                    /* Product Selection */
                    <div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Select a Product</h2>
                            <p className="text-gray-600 mb-8">Choose the product you have data for</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(products).map(([key, product]) => {
                                    const colors = getColorClasses(product.color);
                                    const criticalCount = product.fields.filter(f => f.priority === 'critical').length;
                                    const highCount = product.fields.filter(f => f.priority === 'high').length;

                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedProduct(key)}
                                            className={`p-8 border-3 ${colors.border} rounded-2xl hover:shadow-xl transition-all text-left transform hover:scale-105 bg-white`}
                                        >
                                            <h3 className={`font-bold text-2xl ${colors.text} mb-2`}>
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 mb-4">{product.subtitle}</p>

                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`h-3 rounded-full ${colors.button}`}
                                                        style={{ width: `${product.accuracy}%` }}
                                                    />
                                                </div>
                                                <span className={`font-bold ${colors.text}`}>{product.accuracy}%</span>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {criticalCount > 0 && (
                                                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                                                        🚨 {criticalCount} Critical
                                                    </span>
                                                )}
                                                {highCount > 0 && (
                                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                                                        ⚠️ {highCount} High Priority
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Form */
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className={`text-4xl font-bold ${getColorClasses(products[selectedProduct].color).text} mb-2`}>
                                    {products[selectedProduct].name} Data
                                </h2>
                                <p className="text-gray-600">{products[selectedProduct].subtitle}</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedProduct(null);
                                    setFormData({});
                                }}
                                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                ← Back to Products
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {products[selectedProduct].fields.map(field => {
                                const isPriority = field.priority === 'critical' || field.priority === 'high';
                                const borderColor = field.priority === 'critical' ? 'border-red-500' :
                                                   field.priority === 'high' ? 'border-amber-500' : 'border-gray-300';

                                return (
                                    <div key={field.id} className={`border-l-4 ${borderColor} pl-6 py-4 ${isPriority ? 'bg-gray-50' : ''} rounded-r-lg`}>
                                        <label className="block text-lg font-bold text-gray-900 mb-2">
                                            {field.priority === 'critical' && '🚨 '}
                                            {field.priority === 'high' && '⚠️ '}
                                            {field.label}
                                            {field.required && <span className="text-red-500 ml-1">*</span>}
                                        </label>
                                        {field.description && (
                                            <p className="text-sm text-gray-600 mb-3">{field.description}</p>
                                        )}
                                        <div className="flex items-center gap-3">
                                            <input
                                                type={field.type}
                                                value={formData[field.id] || ''}
                                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                required={field.required}
                                                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex-1 text-lg"
                                                placeholder="Enter value"
                                                step={field.type === 'number' ? '0.01' : undefined}
                                            />
                                            {field.unit && (
                                                <span className="text-gray-600 font-medium">{field.unit}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="pt-6 border-t-2 border-gray-200">
                                <button
                                    type="submit"
                                    className={`w-full ${getColorClasses(products[selectedProduct].color).button} text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-lg`}
                                >
                                    <Download className="w-6 h-6" />
                                    Download as Markdown & Submit
                                </button>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Your data will be downloaded as a .md file. Please email it to data-team@monoatomlabs.com
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataSubmission;
