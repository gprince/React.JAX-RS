package org.react.rs;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;
import org.react.rs.resource.ReactRSResource;

/**
 * Created by gprince on 17/02/14.
 */
public class ReactRSApplication extends ResourceConfig {

    public ReactRSApplication() {
        register(RequestContextFilter.class);
        register(JacksonFeature.class);
        register(ReactRSResource.class);
    }
}
