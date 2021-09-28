import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import '../assets/css/nav.css';

export default function Navigation({ value }) {

    var urls = window.location.href;

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {(() => {
                switch (value) {
                    case "dashboard":
                        return (
                            <div className="locationStyle">
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <MdDashboard className="iconNav" />
                                    Dashboard
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                            </div>
                        );
                    case "perfil":
                        return (
                            <div className="locationStyle">
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <MdDashboard className="iconNav" />
                                    Dashboard
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <FaUserAlt className="iconNav" />
                                    Perfil
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                            </div>
                        );
                    case "forum":
                        return (
                            <div className="locationStyle">
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <MdDashboard className="iconNav" />
                                    Dashboard
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <BiChat className="iconNav"/>
                                    Forum
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                            </div>
                        );
                    case "sala":
                        return (
                            <div className="locationStyle">
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <MdDashboard className="iconNav" />
                                    Dashboard
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                                <Link color="textPrimary" href="/dashboard" aria-current="page" className="link">
                                    <FaUserAlt className="iconNav" />
                                    Sala
                                </Link>
                                <Link color="inherit" href="/getting-started/installation/" className="link">
                                    /
                                </Link>
                            </div>
                        );
                    default: return "#FFFFFF";
                }
            })()}

            {/* color="inherit" */}
        </Breadcrumbs>
    );
}


