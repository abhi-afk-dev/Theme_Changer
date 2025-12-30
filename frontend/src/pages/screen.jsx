import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Screen = () => {
    // Consume the theme context
    const { themeName } = useContext(ThemeContext);

    return (
        // Use theme-aware Tailwind classes that map to CSS variables
        <div className="flex flex-col justify-between w-full min-h-screen bg-background-color text-primary-text-color">
            <div className='flex items-center justify-between p-4 bg-surface-color text-primary-text-color border-b border-border-color'>
                <h1 className="bungee-text text-3xl">Zangetsu - Themed Page</h1>
            </div>
            <div className="w-full flex flex-grow justify-center py-20 px-20">
                <div className="flex flex-col gap-5 p-6 rounded-2xl surface-element"> {/* Use .surface-element */} 
                    <h2 className="text-2xl font-semibold">Current Theme: <span className="capitalize">{themeName}</span></h2>
                    <p className="text-secondary-text-color">
                        This content adapts to the current theme using CSS variables.
                    </p>
                    <div className="flex gap-5">
                        {/* Generic themed buttons */}
                        <button className="px-4 py-2 rounded-lg bg-accent-color text-primary-text-color">
                            Themed Button 1
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-accent-color text-primary-text-color">
                            Themed Button 2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;
