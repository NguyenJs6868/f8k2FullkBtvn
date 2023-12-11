function Contact({data}) {
  return (
    <div className="contact-el border mb-8 border-solid border-[#ccc] p-4 rounded-lg shadow-medium">
      <h3 className="heading">{data.title}</h3>
      <ul>
        <li>{data.phone}: <a href="tel:0397647002" className="text-hight-light">0988360149</a></li>
        <li>Zalo: <a href="https://chat.zalo.me/" className="text-hight-light" target="_blank">https://zalo.me</a></li>
        <li>Email: <a href="mailto:daithehh04@gmail.com" className="text-hight-light">nguyentrungnguyenth14@gmail.com</a></li>
        <li>Linkedin:
          <a
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-trung-nguy%C3%AAn-a57090192/"
            className="text-hight-light"
            target="_blank"
          >
            https://www.linkedin.com/in/nguy%E1%BB%85n-trung-nguy%C3%AAn-a57090192/"
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact