import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="resume-print min-h-screen section-gradient py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Header */}
        <header className="border-b border-slate-200 dark:border-slate-800 pb-6 sm:pb-8 mb-6 sm:mb-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Mobolade Daniel Mayowa
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-primary-600 dark:text-primary-400 font-semibold mt-1">
                Cloud/DevOps Engineer &amp; Web Developer
              </p>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 text-left sm:text-right">
              <p>
                <a
                  href="mailto:danielmobolade@gmail.com"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  danielmobolade@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+2348072072891"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  +234 807 207 2891
                </a>
              </p>
              <p className="flex flex-wrap gap-x-3 gap-y-1 justify-start sm:justify-end">
                <a
                  href="https://danielmobolade.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Portfolio
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://www.linkedin.com/in/daniel-mobolade-062817299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://github.com/DTG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 print-hidden">
            <a
              href="/"
              className="px-4 sm:px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
            >
              ← Back to Portfolio
            </a>
            <a
              href="/api/resume"
              className="px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-xs sm:text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary-500/40 transition-all"
            >
              Download PDF Resume
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Summary
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Highly motivated IT professional with 4+ years of hands-on experience in DevOps workflows,
            infrastructure support, and full-stack software development. Proven ability to maintain
            high-availability systems, automate processes, build custom AI-driven tools, and resolve critical
            incidents with minimal downtime. Skilled in cloud-native tools (Kubernetes, Terraform), monitoring
            (Zabbix, Grafana, PRTG, Prometheus), and modern web stacks (MERN), with a strong focus on
            performance, scalability, and operational excellence. A fast learner and reliable team player
            committed to driving uptime and system reliability in dynamic environments.
          </p>
        </section>

        <div className="grid md:grid-cols-[3fr,2fr] gap-8">
          {/* Left column: Experience & Projects */}
          <div className="space-y-8">
            {/* Experience */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      Cloud/DevOps Engineer
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      01/2024 – Present · Lagos, Nigeria
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2">
                    Cedarview Communications
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      Monitor and manage cloud and on-prem infrastructure 24/7 to ensure high availability,
                      reliability, and performance across critical systems and services.
                    </li>
                    <li>
                      Manage and maintain physical bare-metal servers, including iDRAC configuration, hardware
                      troubleshooting, and component replacement (drives, memory, NICs).
                    </li>
                    <li>
                      Build and deploy custom software tools to automate operations and improve efficiency for
                      multiple departments.
                    </li>
                    <li>
                      Automate routine network and system tasks using Bash, PowerShell, Python, and Ansible to
                      improve operational efficiency and reduce manual intervention.
                    </li>
                    <li>
                      Implement and manage Infrastructure as Code (IaC) using Terraform for scalable,
                      repeatable, and version-controlled infrastructure deployments.
                    </li>
                    <li>
                      Troubleshoot and resolve complex infrastructure and application-level issues across cloud
                      (Kubernetes) and network environments, minimizing downtime and improving MTTR.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      Contract DevOps Engineer
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      10/2019 – 11/2023 · Lagos, Nigeria
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2">
                    Oxygen Technologies
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      Automated infrastructure provisioning and deployment processes using Terraform,
                      improving deployment speed and reducing human error.
                    </li>
                    <li>
                      Built and maintained CI/CD pipelines with Jenkins and GitOps (ArgoCD) to enable rapid,
                      reliable application delivery.
                    </li>
                    <li>
                      Managed and monitored containerized applications in Kubernetes (EKS &amp; on-prem),
                      ensuring high availability and performance.
                    </li>
                    <li>
                      Implemented system-level and application monitoring with Prometheus and Grafana, enabling
                      real-time alerts and dashboards for uptime assurance.
                    </li>
                    <li>
                      Collaborated with development and operations teams to resolve deployment issues,
                      streamline workflows, and improve system resilience.
                    </li>
                    <li>
                      Applied security best practices, including vulnerability scanning (e.g., Trivy) and
                      secrets management, to maintain secure environments.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      IT Support Intern
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      10/2018 – 08/2019 · Lagos, Nigeria
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2">
                    ASNOL IT Service
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      Provided hands-on IT support, troubleshooting hardware and software issues for end users
                      and internal systems.
                    </li>
                    <li>
                      Assisted in maintaining local infrastructure, user accounts, and basic network
                      configurations.
                    </li>
                    <li>
                      Gained foundational experience in systems administration, networking, and problem
                      resolution in a production environment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Selected Projects
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-semibold">Cloud Phoenix</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">2025</p>
                  </div>
                  <p>
                    Designed and developed a cross-departmental enterprise tool used by Cloud, NOC, Fiber,
                    Account, and HR teams. Central hub for knowledgebase, SOPs, and dashboards that integrate
                    with Zabbix, PRTG, Prometheus, and network devices (SNMP) for incident escalation and
                    cost/server monitoring.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-semibold">ProjectAlpha</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">2025</p>
                  </div>
                  <p>
                    Built a specialized financial analysis tool for a telecommunications client to perform
                    large-scale analysis of bank statements, uncover complex payment patterns, and support
                    data-driven financial decisions.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-semibold">Ratel Store</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">2025</p>
                  </div>
                  <p>
                    Developed and deployed a full-featured e-commerce platform using modern full-stack
                    practices, including authentication, payments, admin dashboard, and analytics.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-semibold">Derby Kids Online School Website</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">2025</p>
                  </div>
                  <p>
                    Built a responsive Next.js website for an online education platform with animated UI,
                    EmailJS-powered contact forms, and mobile-optimized navigation. Deployed on Netlify with
                    Git-based CI/CD.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-semibold">Tech Academy Website</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">2025</p>
                  </div>
                  <p>
                    Built and deployed a responsive React + Vite landing page for a tech training academy,
                    featuring animated course cards, pricing and CTA sections, and optimized WebP-based image
                    loading (via a custom Sharp optimization script) for fast performance on Netlify.
                  </p>
                </div>
              </div>
            </section>

            {/* Engagements */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Professional Engagements
              </h2>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li>GITEX Nigeria 2025</li>
                <li>Africa Data Sovereignty Conference 2025</li>
              </ul>
            </section>
          </div>

          {/* Right column: Skills & Education */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Skills
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    Cloud &amp; Hybrid Infrastructure
                  </p>
                  <p>Cloud platforms, hybrid environments, and infrastructure automation.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    DevOps &amp; CI/CD
                  </p>
                  <p>CI/CD pipelines, GitOps, automated deployments, and release workflows.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    Monitoring &amp; Observability
                  </p>
                  <p>
                    Zabbix, Grafana, PRTG, Prometheus, alerting, dashboards, and incident visibility.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    System &amp; Network Administration
                  </p>
                  <p>Linux, networking basics, server management, and troubleshooting.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    Full-Stack &amp; AI Development
                  </p>
                  <p>MERN stack, internal tools, and applied AI &amp; generative AI solutions.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">
                    Security &amp; Tooling
                  </p>
                  <p>Security best practices, vulnerability scanning, and internal tooling.</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Education &amp; Certifications
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <p className="font-semibold">Higher National Diploma (HND)</p>
                  <p>Federal Polytechnic, Offa — Offa, Kwara State</p>
                </div>
                <div>
                  <p className="font-semibold">Ordinary National Diploma (OND)</p>
                  <p>Kwara State Polytechnic, Ilorin — Ilorin, Kwara State</p>
                </div>
                <div>
                  <p className="font-semibold">
                    The West African Senior Secondary School Certificate (WASSCE)
                  </p>
                  <p>Bimaks International School, Ijagbo — Ijagbo, Kwara State</p>
                </div>
                <div>
                  <p className="font-semibold">NYSC Certificate</p>
                  <p>National Youth Service Corps — Kosofe, Lagos State</p>
                </div>
              </div>
            </section>

            {/* Courses */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Courses &amp; Training
              </h2>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li>Web Design Course for Beginner to Intermediate — Udemy</li>
                <li>UI/UX Foundation and Fundamentals — MyGreatLearning Academy</li>
                <li>UI/UX Design with Figma — Udemy</li>
                <li>Search Engine Optimization — Udemy</li>
                <li>Mastering Linux: Essential Skills and Knowledge — Lablabee</li>
                <li>Containers with Docker — Lablabee</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs sm:text-sm">
          <Link
            href="/"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            ← Back to portfolio
          </Link>
          <span className="text-slate-500 dark:text-slate-400">
            Last updated 2025
          </span>
        </div>
      </div>
    </main>
  )
}


