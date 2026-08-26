import { ArrowLink, PageHeading, ProjectCard, SiteShell } from '../site'
import { projects } from '../data'
export default function Trabalhos() { return <SiteShell><main className="page-wrap listing"><PageHeading label="/ TRABALHOS" title="Trabalhos em jornalismo, comunicação, pesquisa e dados." text="Um recorte do que venho apurando, pesquisando e produzindo até aqui."/><div className="work-list">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} featured={i === 0}/>)}</div></main></SiteShell> }
