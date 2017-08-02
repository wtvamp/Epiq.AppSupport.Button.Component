﻿using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Epiq.AppSupport.Button.Component
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
