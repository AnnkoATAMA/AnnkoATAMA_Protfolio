import "./css/skills.css"

const SkillsPage = () => {
  return (
      <div className={"skill-container"}>
          <div className={"skill-header"}>
              血統(スキル早見表)
          </div>
          <div className="pedigree-chart">
              <div className="sire">
                  <div className="parent">react</div>
                  <div className="grandparents">
                      <div className="grandparent">Swift</div>
                      <div className="grandparent">Vue</div>
                  </div>
              </div>
              <div className="dam">
                  <div className="parent">Java</div>
                  <div className="grandparents">
                      <div className="grandparent">Python</div>
                      <div className="grandparent">MySQL</div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default SkillsPage;