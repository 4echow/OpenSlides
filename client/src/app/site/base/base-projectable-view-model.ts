import { Projectable, ProjectorElementBuildDeskriptor } from './projectable';
import { BaseViewModel } from './base-view-model';
import { ConfigService } from 'app/core/ui-services/config.service';
import { BaseModel } from 'app/shared/models/base/base-model';

/**
 * Base view class for projectable models.
 */
export abstract class BaseProjectableViewModel<M extends BaseModel = any> extends BaseViewModel<M>
    implements Projectable {
    public abstract getSlide(configService?: ConfigService): ProjectorElementBuildDeskriptor;

    /**
     * @returns the projector title used for managing projector elements.
     */
    public getProjectorTitle = () => {
        return this.getTitle();
    };
}
