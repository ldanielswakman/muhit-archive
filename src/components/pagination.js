import React from "react"
import { Link } from "gatsby"

export default (props) => {
  const { currentPage, numPages } = props;
  const pageBuffer = 3;

  return (
    <ul className="pagination u-mb20" data-currentPage={currentPage} data-numPages={numPages}>

      {/* Prev page link */}
      {currentPage === 1 ? (
        <li className='disabled'><span>«</span></li>
      ) : (
        <li><Link to={`ideas/${currentPage - 1}`} rel="next">«</Link></li>
      )}

      {(currentPage - pageBuffer - 1 > 0) && (
        <li><Link to={`ideas`}>1</Link></li>
      )}

      {(currentPage - pageBuffer - 2 > 0) && (
        <li className="disabled"><span>...</span></li>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <React.Fragment>
          {(i < currentPage + pageBuffer) && (i > currentPage - pageBuffer - 2) && (
            <li key={i + 1} className={(i + 1 === currentPage) && 'active'}>
              <Link to={`ideas/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
            </li>
          )}
        </React.Fragment>
      ))}

      {(currentPage + pageBuffer + 1 < numPages) && (
        <li className="disabled"><span>...</span></li>
      )}

      {(currentPage + pageBuffer < numPages) && (
        <li><Link to={`ideas/${numPages}`}>{numPages}</Link></li>
      )}

      {/* Next page link */}
      {currentPage === numPages ? (
        <li className='disabled'><span>»</span></li>
      ) : (
        <li><Link to={`ideas/${currentPage + 1}`} rel="next">»</Link></li>
      )}

    </ul>
  )
}
