export default function ApplicationLogo(props) {
    const styles = {
        cls1: {
            fill: '#4a4a4a',
        },
        cls2: {
            fill: '#fff',
        },
        cls3: {
            fill: '#ffff29',
        },
        cls4: {
            fill: '#b9b9b9',
        },
    };

    return (
        <svg {...props} id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <g id="Capa_1-2" data-name="Capa 1">
                <rect style={styles.cls2} width="1000" height="1000" />
                <g>
                    <polygon style={styles.cls3} points="816.29 894.85 26.59 894.85 26.59 105.15 816.29 105.15 816.29 374.93 733.97 374.93 733.97 187.47 108.9 187.47 108.9 812.53 733.97 812.53 733.97 625.23 816.29 625.23 816.29 894.85" />
                    <g>
                        <path style={styles.cls1} d="M447,374.94l99.06,172.54,95.34-172.54h20.24v250.29h-21.84v-200.24l-83.36,148.57c-.4.55-.97.5-1.56.57-2.05.25-18.63.2-19.47-.3l-1.49-2.23-85.32-147.14v200.77h-21.84v-250.29h20.24Z" />
                        <path style={styles.cls1} d="M412.38,625.23h-22.9l-28.47-69.27-128.83.12-29.38,69.14h-21.57l.81-3.18,104.64-246.85c.79-.48,16.43-.51,18.41-.29.76.09,1.41.05,1.79.87l105.5,249.45ZM353.26,535.23l-57.25-134.74-56.2,134.74h113.45Z" />
                    </g>
                    <path style={styles.cls4} d="M965.08,153.84v14.49h-72.13l-5.87,50.38c34.74-1.59,85.75-.92,86.32,45.87.63,51.41-61.29,57.34-97.61,40.3-2.77-1.3-17.36-9.67-16.92-12.54.26-1.7,6.88-9.73,7.86-12.21,7.08,6.23,14.81,11.12,23.83,14.12,27.38,9.1,69.92,4.39,65.47-33.71-4.11-35.13-62.16-26.08-86.21-27.34l8.29-79.36h86.97Z" />
                </g>
            </g>
        </svg>
    );
}