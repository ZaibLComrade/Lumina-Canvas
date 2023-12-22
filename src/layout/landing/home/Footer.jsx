import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return <div>
<footer className="p-10 rounded footer footer-center bg-base-200 text-base-content">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="text-3xl grid grid-flow-col gap-4">
		<button><a href="https://www.facebook.com/scarcrack"><FaFacebook/></a></button>
		<button><a href="https://github.com/ZaibLComrade"><FaGithub/></a></button>
		<button><a href="https://www.linkedin.com/in/kmjahanzaib"><FaLinkedin/></a></button>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by SCC Technovision Inc.</p>
  </aside>
</footer>
	</div>
}
