import { ArrowRight, Zap, GitBranch, Clock, Shield, Workflow, CheckCircle, Play, Settings, Database, Mail, Webhook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function N8nWorkflowPage() {
  const workflowFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automated Processing",
      description: "Streamline your business processes with intelligent automation"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Multi-Step Workflows",
      description: "Complex branching logic with conditional processing"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Execution",
      description: "Instant triggers and responses for time-sensitive operations"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with error handling and monitoring"
    }
  ]

  const workflowSteps = [
    {
      step: 1,
      icon: <Webhook className="h-8 w-8" />,
      title: "Webhook Trigger",
      description: "Receives incoming data from external systems",
      color: "bg-blue-500"
    },
    {
      step: 2,
      icon: <Database className="h-8 w-8" />,
      title: "Data Processing",
      description: "Validates, transforms, and enriches incoming data",
      color: "bg-green-500"
    },
    {
      step: 3,
      icon: <GitBranch className="h-8 w-8" />,
      title: "Conditional Logic",
      description: "Routes data based on business rules and conditions",
      color: "bg-purple-500"
    },
    {
      step: 4,
      icon: <Mail className="h-8 w-8" />,
      title: "Notification System",
      description: "Sends alerts and updates to relevant stakeholders",
      color: "bg-orange-500"
    },
    {
      step: 5,
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Final Output",
      description: "Delivers processed results to target systems",
      color: "bg-emerald-500"
    }
  ]

  const integrations = [
    "Slack", "Gmail", "Shopify", "Stripe", "Airtable", "Google Sheets", 
    "Webhook", "HTTP Request", "MySQL", "PostgreSQL", "MongoDB", "Redis"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Workflow className="h-4 w-4" />
              n8n Workflow Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Workflow
              <span className="text-blue-600 block">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business processes with our sophisticated n8n workflow that automates 
              complex tasks, integrates multiple systems, and delivers results with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Play className="h-5 w-5 mr-2" />
                View Live Demo
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Settings className="h-5 w-5 mr-2" />
                Explore Workflow
              </Button>
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Workflow Architecture</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center relative">
                  <div className={`${step.color} text-white rounded-full p-4 mb-4 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="text-center max-w-xs">
                    <div className="text-sm font-semibold text-gray-500 mb-1">STEP {step.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-12 top-8 h-6 w-6 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Workflow?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with enterprise-grade reliability and designed for scalability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 text-blue-600 rounded-full p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Capabilities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Processes 1000+ requests per minute
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      99.9% uptime with automatic failover
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Real-time monitoring and alerting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Advanced error handling and retry logic
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      OAuth 2.0 authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      Audit logging and compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Workflow Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-300">Executions/Day</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2.5s</div>
                  <div className="text-gray-300">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-blue-300 transition-colors"
              >
                {integration}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Workflow?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our powerful n8n workflow solution and transform your business processes today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Play className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}