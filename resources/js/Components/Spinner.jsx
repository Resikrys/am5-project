// Spinner.js
import React from 'react';

const Spinner = () => (
    <div className="flex justify-center items-center h-full w-full bg-gray-50/80">
        <div className="relative w-16 h-16">
            {/* Anillo exterior */}
            <div className="absolute w-16 h-16 border-4 border-primary opacity-20 rounded-full"></div>
            {/* Anillo giratorio */}
            <div className="absolute w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
            {/* Texto de carga */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-primary font-medium">
                Cargando
            </span>
        </div>
    </div>
);

export default Spinner;