import React from 'react'
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 32,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#111827',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 6,
    color: '#111827',
  },
  header: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: '#111827',
  },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: '#4F46E5',
    marginTop: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  contactBlock: {
    fontSize: 9,
    color: '#374151',
    textAlign: 'right',
  },
  link: {
    color: '#2563EB',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#374151',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    marginBottom: 2,
  },
  itemTitle: {
    fontWeight: 600,
    color: '#111827',
  },
  itemMeta: {
    color: '#6B7280',
  },
  itemSub: {
    fontSize: 9,
    color: '#4B5563',
    marginBottom: 2,
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  bulletDot: {
    width: 3,
    marginRight: 3,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#374151',
  },
  twoCol: {
    flexDirection: 'row',
    gap: 16,
  },
  leftCol: {
    flex: 3,
  },
  rightCol: {
    flex: 2,
  },
})

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.bulletItem}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
)

export const ResumePdfDocument = () => (
  <Document
    title="Mobolade Daniel Mayowa - Cloud/DevOps Engineer & Web Developer"
    author="Mobolade Daniel Mayowa"
  >
    {/* Page 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.name}>Mobolade Daniel Mayowa</Text>
            <Text style={styles.role}>Cloud/DevOps Engineer & Web Developer</Text>
          </View>
          <View style={styles.contactBlock}>
            <Link src="mailto:danielmobolade@gmail.com" style={styles.link}>
              <Text>danielmobolade@gmail.com</Text>
            </Link>
            <Text>+234 807 207 2891</Text>
            <Link src="https://danielmobolade.netlify.app" style={styles.link}>
              <Text>Portfolio</Text>
            </Link>
            <Link src="https://www.linkedin.com/in/daniel-mobolade-062817299" style={styles.link}>
              <Text>LinkedIn</Text>
            </Link>
            <Link src="https://github.com/DTG8" style={styles.link}>
              <Text>GitHub</Text>
            </Link>
          </View>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.paragraph}>
          Highly motivated Cloud/DevOps Engineer with 4+ years of hands-on experience in DevOps workflows,
          infrastructure support, and full-stack software development. Proven ability to maintain
          high-availability systems, automate processes, build custom AI-driven tools, and resolve critical
          incidents with minimal downtime. Skilled in cloud-native tooling (Kubernetes, Terraform),
          monitoring (Zabbix, Grafana, PRTG, Prometheus), and modern web stacks, with a strong focus on
          performance, scalability, and operational excellence.
        </Text>
      </View>

      <View style={styles.twoCol}>
        {/* Left: Experience */}
        <View style={styles.leftCol}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            {/* Cedarview */}
            <View style={{ marginBottom: 4 }}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>Cloud/DevOps Engineer · Cedarview Communications</Text>
                <Text style={styles.itemMeta}>01/2024 – Present · Lagos, Nigeria</Text>
              </View>
              <View style={styles.bulletList}>
                <Bullet>
                  Monitor and manage cloud and on-prem infrastructure to ensure high availability and
                  performance across critical services.
                </Bullet>
                <Bullet>
                  Maintain bare-metal servers (iDRAC configuration, hardware troubleshooting, component
                  replacement for drives, memory, NICs).
                </Bullet>
                <Bullet>
                  Build and deploy internal tools to automate operations and improve efficiency across
                  multiple departments.
                </Bullet>
                <Bullet>
                  Automate routine network and system tasks using Bash, PowerShell, Python, and Ansible to
                  reduce manual work and human error.
                </Bullet>
                <Bullet>
                  Implement Infrastructure as Code with Terraform for scalable, repeatable, versioned
                  environments.
                </Bullet>
                <Bullet>
                  Troubleshoot complex issues across Kubernetes and network layers, improving MTTR and
                  minimizing downtime.
                </Bullet>
              </View>
            </View>

            {/* Oxygen */}
            <View style={{ marginBottom: 4 }}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>Contract DevOps Engineer · Oxygen Technologies</Text>
                <Text style={styles.itemMeta}>10/2019 – 11/2023 · Lagos, Nigeria</Text>
              </View>
              <View style={styles.bulletList}>
                <Bullet>
                  Automated infrastructure provisioning and deployments with Terraform, improving speed and
                  reducing configuration drift.
                </Bullet>
                <Bullet>
                  Built and maintained CI/CD pipelines with Jenkins and GitOps (ArgoCD) to enable reliable,
                  repeatable releases.
                </Bullet>
                <Bullet>
                  Managed containerized workloads on Kubernetes (EKS and on-prem), ensuring availability and
                  performance.
                </Bullet>
                <Bullet>
                  Implemented monitoring with Prometheus and Grafana, providing real-time alerting and
                  dashboards for SRE and operations.
                </Bullet>
                <Bullet>
                  Collaborated with engineering and operations teams to resolve deployment issues and
                  harden platform resilience.
                </Bullet>
                <Bullet>
                  Applied security practices including vulnerability scanning (e.g., Trivy) and secrets
                  management.
                </Bullet>
              </View>
            </View>

            {/* ASNOL */}
            <View>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>IT Support Intern · ASNOL IT Service</Text>
                <Text style={styles.itemMeta}>10/2018 – 08/2019 · Lagos, Nigeria</Text>
              </View>
              <View style={styles.bulletList}>
                <Bullet>
                  Provided hands-on IT support, troubleshooting hardware and software issues for end users
                  and internal systems.
                </Bullet>
                <Bullet>
                  Assisted with local infrastructure maintenance, basic network configuration, and user
                  account management.
                </Bullet>
                <Bullet>
                  Built a foundation in systems administration, networking, and incident resolution in a
                  production environment.
                </Bullet>
              </View>
            </View>
          </View>
        </View>

        {/* Right: Skills & Education (condensed) */}
        <View style={styles.rightCol}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: 600 }}>Cloud &amp; Infrastructure: </Text>
              AWS, hybrid environments, Kubernetes, Terraform, Docker.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: 600 }}>DevOps &amp; CI/CD: </Text>
              Jenkins, ArgoCD, GitHub Actions, automated deployments, GitOps.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: 600 }}>Monitoring &amp; Observability: </Text>
              Zabbix, Grafana, PRTG, Prometheus, alerting, dashboards.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: 600 }}>Systems &amp; Networking: </Text>
              Linux, basic networking, server administration, scripting (Bash, PowerShell, Python).
            </Text>
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: 600 }}>Development: </Text>
              MERN stack, internal tools, applied AI &amp; generative AI.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.itemSub}>Higher National Diploma (HND)</Text>
            <Text style={styles.paragraph}>Federal Polytechnic, Offa — Offa, Kwara State</Text>
            <Text style={[styles.itemSub, { marginTop: 3 }]}>Ordinary National Diploma (OND)</Text>
            <Text style={styles.paragraph}>Kwara State Polytechnic, Ilorin — Ilorin, Kwara State</Text>
            <Text style={[styles.itemSub, { marginTop: 3 }]}>
              The West African Senior Secondary School Certificate (WASSCE)
            </Text>
            <Text style={styles.paragraph}>Bimaks International School, Ijagbo — Kwara State</Text>
            <Text style={[styles.itemSub, { marginTop: 3 }]}>NYSC Certificate</Text>
            <Text style={styles.paragraph}>National Youth Service Corps — Kosofe, Lagos State</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Training &amp; Courses</Text>
            <Text style={styles.paragraph}>Web Design (Udemy)</Text>
            <Text style={styles.paragraph}>UI/UX Foundation &amp; Figma (MyGreatLearning, Udemy)</Text>
            <Text style={styles.paragraph}>Search Engine Optimization (Udemy)</Text>
            <Text style={styles.paragraph}>Mastering Linux (Lablabee)</Text>
            <Text style={styles.paragraph}>Containers with Docker (Lablabee)</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: Projects & Engagements */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Projects</Text>
        <View style={{ marginBottom: 4 }}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Cloud Phoenix · 2025</Text>
          </View>
          <Text style={styles.paragraph}>
            Enterprise incident management and monitoring platform used across Cloud, NOC, Fiber, Account,
            and HR teams. Integrates with Zabbix, PRTG, Prometheus, and network devices (SNMP) to provide
            centralized dashboards, cost and server monitoring, and automatic escalation for service
            downtime.
          </Text>
        </View>

        <View style={{ marginBottom: 4 }}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>ProjectAlpha · 2025</Text>
          </View>
          <Text style={styles.paragraph}>
            Specialized financial analysis tool for a telecommunications client, performing large-scale bank
            statement analysis to uncover complex payment patterns and support data-driven financial
            decision-making.
          </Text>
        </View>

        <View style={{ marginBottom: 4 }}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Ratel Store · 2025</Text>
          </View>
          <Text style={styles.paragraph}>
            Full-featured e-commerce platform built with modern full-stack practices, including user
            authentication, payments, order management, and analytics-ready admin dashboard.
          </Text>
        </View>

        <View style={{ marginBottom: 4 }}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Derby Kids Online School · 2025</Text>
          </View>
          <Text style={styles.paragraph}>
            Responsive Next.js website for an online education platform with animated UI components,
            EmailJS-powered contact forms, and mobile-optimized navigation. Deployed to Netlify with Git-based
            CI/CD.
          </Text>
        </View>

        <View>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Tech Academy Website · 2025</Text>
          </View>
          <Text style={styles.paragraph}>
            Responsive React + Vite landing page for a tech training academy, featuring animated course cards,
            pricing and CTA sections, and optimized WebP-based image loading via a Sharp-based optimization
            script for fast performance on Netlify.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Engagements</Text>
        <Text style={styles.paragraph}>GITEX Nigeria 2025</Text>
        <Text style={styles.paragraph}>Africa Data Sovereignty Conference 2025</Text>
      </View>
    </Page>
  </Document>
)


